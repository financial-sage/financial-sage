-- Migration 002: avoid RLS recursion by adding SECURITY DEFINER helper and replacing policies

BEGIN;

-- Create (or replace) a helper function that checks admin role without invoking RLS
-- SECURITY DEFINER runs with the function owner's privileges so the internal select
-- won't re-trigger row-level policies on `public.profiles` (avoids infinite recursion).
create or replace function public.is_user_admin(uid uuid) returns boolean
language sql stable security definer as $$
  select exists(select 1 from public.profiles where id = $1 and role = 'admin');
$$;

-- Drop old policies that used subqueries against public.profiles
-- (safe to drop if they don't exist)
drop policy if exists "profiles_select_self_or_admin" on public.profiles;
drop policy if exists "admin_logs_select_admins_only" on public.admin_access_logs;

-- Recreate policies using the helper function
create policy "profiles_select_self_or_admin" on public.profiles
  for select using (
    auth.role() = 'authenticated' and (
      auth.uid() = id
      or public.is_user_admin(auth.uid())
    )
  );

create policy "admin_logs_select_admins_only" on public.admin_access_logs
  for select using (
    public.is_user_admin(auth.uid())
  );

COMMIT;
