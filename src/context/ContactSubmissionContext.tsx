"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  terms_accepted: boolean;
  created_at: string; // ISO string
}

interface ContactSubmissionContextType {
  contactSubmissions: ContactSubmission[];
  deleteContactSubmission: (id: string) => Promise<void>;
  loading: boolean;
}

const ContactSubmissionContext = createContext<ContactSubmissionContextType | undefined>(undefined);

export const ContactSubmissionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactSubmissions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false }); // Newest first

      if (error) {
        console.error('Error fetching contact submissions:', error);
        toast.error('Failed to load contact messages.');
      } else {
        setContactSubmissions(data as ContactSubmission[]);
      }
      setLoading(false);
    };

    fetchContactSubmissions();
  }, []);

  const deleteContactSubmission = async (id: string) => {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting contact submission:', error);
      toast.error('Failed to delete contact message.');
    } else {
      setContactSubmissions(prevSubmissions => prevSubmissions.filter(submission => submission.id !== id));
      toast.success('Contact message deleted successfully!');
    }
  };

  return (
    <ContactSubmissionContext.Provider value={{ contactSubmissions, deleteContactSubmission, loading }}>
      {children}
    </ContactSubmissionContext.Provider>
  );
};

export const useContactSubmissions = () => {
  const context = useContext(ContactSubmissionContext);
  if (context === undefined) {
    throw new Error('useContactSubmissions must be used within a ContactSubmissionProvider');
  }
  return context;
};