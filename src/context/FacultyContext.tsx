"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { initialFaculty, Faculty } from '@/data/faculty';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

interface FacultyContextType {
  faculty: Faculty[];
  addFaculty: (faculty: Omit<Faculty, 'id' | 'created_at'>) => Promise<void>;
  updateFaculty: (updatedFaculty: Faculty) => Promise<void>;
  deleteFaculty: (id: string) => Promise<void>;
  loading: boolean;
}

const FacultyContext = createContext<FacultyContextType | undefined>(undefined);

export const FacultyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('faculty')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching faculty:', error);
        toast.error('Failed to load faculty information.');
        // Removed fallback to initialFaculty. If Supabase fails, faculty will remain empty.
      } else {
        setFaculty(data as Faculty[]);
      }
      setLoading(false);
    };

    fetchFaculty();
  }, []);

  const addFaculty = async (newFaculty: Omit<Faculty, 'id' | 'created_at'>) => {
    const facultyToInsert = { ...newFaculty, id: `faculty-${Date.now()}` }; // Generate a client-side ID for immediate UI update
    const { data, error } = await supabase
      .from('faculty')
      .insert([facultyToInsert])
      .select();

    if (error) {
      console.error('Error adding faculty:', error);
      toast.error(`Failed to add faculty: ${error.message}`);
    } else if (data && data.length > 0) {
      setFaculty(prev => [...prev, data[0]]);
      toast.success('Faculty member added successfully!');
    }
  };

  const updateFaculty = async (updatedFaculty: Faculty) => {
    const { data, error } = await supabase
      .from('faculty')
      .update(updatedFaculty)
      .eq('id', updatedFaculty.id)
      .select();

    if (error) {
      console.error('Error updating faculty:', error);
      toast.error(`Failed to update faculty: ${error.message}`);
    } else if (data && data.length > 0) {
      setFaculty(prev =>
        prev.map(f => (f.id === updatedFaculty.id ? data[0] : f))
      );
      toast.success('Faculty member updated successfully!');
    }
  };

  const deleteFaculty = async (id: string) => {
    const { error } = await supabase
      .from('faculty')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting faculty:', error);
      toast.error(`Failed to delete faculty: ${error.message}`);
    } else {
      setFaculty(prev => prev.filter(f => f.id !== id));
      toast.success('Faculty member deleted successfully!');
    }
  };

  return (
    <FacultyContext.Provider value={{ faculty, addFaculty, updateFaculty, deleteFaculty, loading }}>
      {children}
    </FacultyContext.Provider>
  );
};

export const useFaculty = () => {
  const context = useContext(FacultyContext);
  if (context === undefined) {
    throw new Error('useFaculty must be used within a FacultyProvider');
  }
  return context;
};