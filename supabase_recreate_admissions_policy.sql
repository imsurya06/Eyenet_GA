-- 1. Ensure Row Level Security is enabled for the 'admissions' table
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- 2. Grant INSERT privilege to the 'anon' role on the 'admissions' table
--    This ensures the anonymous user has the base permission to insert.
GRANT INSERT ON public.admissions TO anon;

-- 3. Drop any existing policy named "Allow public insert access" to avoid conflicts
DROP POLICY IF EXISTS "Allow public insert access" ON public.admissions;

-- 4. Create a new RLS policy to allow 'anon' users to insert rows
CREATE POLICY "Allow public insert access" ON public.admissions
FOR INSERT TO anon WITH CHECK (true);