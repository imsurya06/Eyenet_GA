"use client";
import React, { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AdminHeader from '@/components/AdminHeader';
import AdminFacultyCard from '@/components/AdminFacultyCard';
import AdminAddFacultyDialog from '@/components/AdminAddFacultyDialog';
import { useFaculty } from '@/context/FacultyContext';
import { Faculty } from '@/data/faculty';
import { AdminActionOverlay } from '@/components/AdminActionOverlay';

const AdminFaculty = () => {
  const { faculty, addFaculty, deleteFaculty, updateFaculty, loading } = useFaculty();
  const [isAddFacultyDialogOpen, setIsAddFacultyDialogOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddFacultyClick = () => {
    setEditingFaculty(null);
    setIsAddFacultyDialogOpen(true);
  };

  const handleEditFaculty = (facultyMember: Faculty) => {
    setEditingFaculty(facultyMember);
    setIsAddFacultyDialogOpen(true);
  };

  const handleSaveFaculty = async (facultyMember: Omit<Faculty, 'created_at'>) => {
    setIsProcessing(true);
    try {
      if (editingFaculty) {
        await updateFaculty({ ...facultyMember, created_at: editingFaculty.created_at }); // Preserve original created_at
      } else {
        await addFaculty(facultyMember);
      }
      setIsAddFacultyDialogOpen(false);
      setEditingFaculty(null);
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      setIsProcessing(false);
    }
  };

  const handleDeleteFaculty = async (id: string) => {
    setIsProcessing(true);
    try {
      await deleteFaculty(id);
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminActionOverlay isProcessing={isProcessing} />
      <AdminHeader pageTitle="Faculty" />
      <div className="flex-1 p-6 md:p-8 lg:p-10 bg-gray-50">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-8 text-foreground text-center">
            Manage Faculty Members
          </h2>
        </AnimateOnScroll>
        
        {loading ? (
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              Loading faculty information...
            </p>
          </AnimateOnScroll>
        ) : faculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {faculty.map((facultyMember, index) => (
              <AnimateOnScroll key={facultyMember.id} delay={200 + index * 50}>
                <AdminFacultyCard faculty={facultyMember} onDelete={handleDeleteFaculty} onEdit={handleEditFaculty} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No faculty members found.
            </p>
          </AnimateOnScroll>
        )}
      </div>

      <AdminAddFacultyDialog
        open={isAddFacultyDialogOpen}
        onOpenChange={setIsAddFacultyDialogOpen}
        editingFaculty={editingFaculty}
        onSave={handleSaveFaculty}
      />
    </div>
  );
};
export default AdminFaculty;