CREATE POLICY "Enable insert for all users"
ON public.admissions
FOR INSERT
TO public
WITH CHECK (true);