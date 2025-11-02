CREATE POLICY "Enable insert for authenticated users"
ON public.admissions
FOR INSERT
TO authenticated
WITH CHECK (true);