CREATE TABLE public.faculty (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT,
  qualification TEXT NOT NULL,
  achievements TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.faculty ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" ON public.faculty FOR SELECT USING (TRUE);
CREATE POLICY "Allow authenticated users to insert" ON public.faculty FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users to update" ON public.faculty FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated users to delete" ON public.faculty FOR DELETE USING (auth.role() = 'authenticated');