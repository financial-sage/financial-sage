Admin module overview

This project includes a minimal admin dashboard protected by Supabase RLS and server-side checks.

Files added:
- supabase/migrations/001_add_admin_tables_and_policies.sql - SQL migration to create `profiles` and `admin_access_logs` and RLS policies.
- lib/supabaseAdmin.ts - server-only Supabase client using `SUPABASE_SERVICE_ROLE_KEY` and helper `isUserAdmin`.
- app/api/admin/check/route.ts - server API to check if current session is admin.
- app/api/admin/logs/route.ts - server API to create and list admin access logs.
- app/admin/page.tsx - server-rendered page that denies access unless the user is admin.
- app/components/AdminClient.tsx - client component with UI to view logs, 2FA status, and create manual logs.

Environment variables (set in deployment / .env.local - do NOT commit service role key):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY  <-- REQUIRED for server admin client

Quick setup
1) Run the SQL migration against your Supabase database (psql or via Supabase SQL editor) using the file `supabase/migrations/001_add_admin_tables_and_policies.sql`.
2) Add `SUPABASE_SERVICE_ROLE_KEY` to your environment (server only).
3) For users who should be admins, set `role = 'admin'` in `public.profiles` for their `id` (which references `auth.users.id`).

Notes on security
- RLS policies are the primary enforcement for access to `admin_access_logs` and `profiles` table.
- The service role key is required for server queries that need elevated privileges (don't expose it to clients).
- The UI includes simple 2FA checks via user metadata; a production implementation should integrate a proper 2FA flow (TOTP or SMS) and verification.

Next steps / improvements
- Implement a proper admin management UI to promote/demote users.
- Add audit log retention and search/filter UX.
- Add server-side rate limiting for admin API endpoints.

