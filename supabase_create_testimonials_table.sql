CREATE TABLE testimonials (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  quote TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  approved BOOLEAN DEFAULT FALSE,
  date DATE NOT NULL,
  avatar TEXT
);

-- Optional: Add RLS policies for public read and authenticated write
-- Enable Row Level Security
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policy for public read access (only approved testimonials)
CREATE POLICY "Allow public read access to approved testimonials" ON testimonials
FOR SELECT USING (approved = true);

-- Policy for authenticated users to insert testimonials
CREATE POLICY "Allow authenticated users to insert testimonials" ON testimonials
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy for authenticated users (admins) to update and delete any testimonial
CREATE POLICY "Allow admin to manage all testimonials" ON testimonials
FOR ALL USING (auth.role() = 'authenticated') WITH CHECK (auth.role() = 'authenticated');