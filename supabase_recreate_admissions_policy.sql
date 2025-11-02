-- Drop the existing policy first to ensure a clean slate
    -- (This part was in the previous step, but included here for completeness if running as a single block)
    -- DROP POLICY IF EXISTS "Allow public insert access" ON public.admissions;

    -- Create a new policy for public insert access
    CREATE POLICY "Allow public insert access" ON public.admissions
    FOR INSERT TO anon WITH CHECK (true);