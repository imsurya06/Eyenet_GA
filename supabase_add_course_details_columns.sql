ALTER TABLE courses
ADD COLUMN duration text,
ADD COLUMN eligibility text,
ADD COLUMN "learningOutcomes" jsonb,
ADD COLUMN "careerProspects" jsonb,
ADD COLUMN modules jsonb;