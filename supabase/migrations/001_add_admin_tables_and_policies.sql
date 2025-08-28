-- Migration: create profiles and admin_access_logs tables + RLS policies

-- 1) Create profiles table to store roles for users
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  role text not null default 'user',
  created_at timestamptz default now()
);

-- 2) Create admin access logs table
create table if not exists public.admin_access_logs (
  id uuid default gen_random_uuid() primary key,
  admin_id uuid references public.profiles(id) on delete cascade,
  action text,
  ip text,
  user_agent text,
  metadata jsonb,
  created_at timestamptz default now()
);

-- 3) Enable RLS and policies
alter table public.profiles enable row level security;
alter table public.admin_access_logs enable row level security;

-- Helper function: check admin without triggering RLS recursion.
-- SECURITY DEFINER causes the function to run with the function owner's privileges,
-- allowing it to query `public.profiles` without invoking row-level policies again.
create or replace function public.is_user_admin(uid uuid) returns boolean
language sql stable security definer as $$
  select exists(select 1 from public.profiles where id = $1 and role = 'admin');
$$;

-- Allow users to select their own profile (and admins to select anyone's)
create policy "profiles_select_self_or_admin" on public.profiles
  for select using (
    auth.role() = 'authenticated' and (
      auth.uid() = id
      or public.is_user_admin(auth.uid())
    )
  );

-- Allow users to upsert their own profile (create on first login)
create policy "profiles_upsert_own" on public.profiles
  for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Allow inserts into admin_access_logs only for the authenticated user with matching admin_id
create policy "admin_logs_insert_own" on public.admin_access_logs
  for insert using (auth.role() = 'authenticated') with check (admin_id = auth.uid());

-- Allow selects on admin_access_logs only for users whose profile role = 'admin'
create policy "admin_logs_select_admins_only" on public.admin_access_logs
  for select using (
    public.is_user_admin(auth.uid())
  );

-- Note: To fully manage admin capabilities, set the 'role' field in profiles to 'admin' for desired users.
