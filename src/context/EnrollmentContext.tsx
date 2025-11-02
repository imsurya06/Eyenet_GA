"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export interface Enrollment {
  id: string;
  name: string;
  email: string;
  mobile: string;
  program: string;
  terms_accepted: boolean;
  created_at: string; // ISO string
}

interface EnrollmentContextType {
  enrollments: Enrollment[];
  deleteEnrollment: (id: string) => Promise<void>;
  loading: boolean;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export const EnrollmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('admissions')
        .select('*')
        .order('created_at', { ascending: false }); // Newest first

      if (error) {
        console.error('Error fetching enrollments:', error);
        toast.error('Failed to load enrollments.');
      } else {
        setEnrollments(data as Enrollment[]);
      }
      setLoading(false);
    };

    fetchEnrollments();
  }, []);

  const deleteEnrollment = async (id: string) => {
    const { error } = await supabase
      .from('admissions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting enrollment:', error);
      toast.error('Failed to delete enrollment.');
    } else {
      setEnrollments(prevEnrollments => prevEnrollments.filter(enrollment => enrollment.id !== id));
      toast.success('Enrollment deleted successfully!');
    }
  };

  return (
    <EnrollmentContext.Provider value={{ enrollments, deleteEnrollment, loading }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollments = () => {
  const context = useContext(EnrollmentContext);
  if (context === undefined) {
    throw new Error('useEnrollments must be used within an EnrollmentProvider');
  }
  return context;
};