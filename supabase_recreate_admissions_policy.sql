ALTER TABLE public.admissions DISABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.admissions;