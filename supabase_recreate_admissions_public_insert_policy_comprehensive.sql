-- 1. Temporarily disable RLS and drop all existing policies for 'admissions'
ALTER TABLE public.admissions DISABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.admissions;
DROP POLICY IF EXISTS "Enable insert for all users" ON public.admissions;
DROP POLICY IF EXISTS "Allow public insert" ON public.admissions; -- Drop any previous attempts

-- 2. Enable Row Level Security (RLS) on the 'admissions' table
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- 3. Grant INSERT privilege to the 'anon' role (unauthenticated users)
-- This is crucial for public submissions.
GRANT INSERT ON public.admissions TO anon;

-- 4. Create a new RLS policy to allow INSERT operations for the 'public' role
-- The 'public' role includes both authenticated and anonymous users.
-- WITH CHECK (true) means any row can be inserted as long as the user has permission.
CREATE POLICY "Allow public insert"
ON public.admissions
FOR INSERT
TO public
WITH CHECK (true);