"use client";
import React, { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AdminHeader from '@/components/AdminHeader';
import AdminFacultyCard from '@/components/AdminFacultyCard';
import AdminAddFacultyDialog from '@/components/AdminAddFacultyDialog';
import { useFaculty } from '@/context/FacultyContext';
import { Faculty } from '@/data/faculty';

const AdminFaculty = () => {
  const { faculty, addFaculty, deleteFaculty, updateFaculty, loading } = useFaculty();
  const [isAddFacultyDialogOpen, setIsAddFacultyDialogOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);

  const handleAddFacultyClick = () => {
    setEditingFaculty(null);
    setIsAddFacultyDialogOpen(true);
  };

  const handleEditFaculty = (facultyMember: Faculty) => {
    setEditingFaculty(facultyMember);
    setIsAddFacultyDialogOpen(true);
  };

  const handleSaveFaculty = (facultyMember: Omit<Faculty, 'created_at'>) => {
    if (editingFaculty) {
      updateFaculty({ ...facultyMember, created_at: editingFaculty.created_at }); // Preserve original created_at
    } else {
      addFaculty(facultyMember);
    }
    setIsAddFacultyDialogOpen(false);
    setEditingFaculty(null);
  };

  return (
    <div className="flex-1 flex flex-col">
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
                <AdminFacultyCard faculty={facultyMember} onDelete={deleteFaculty} onEdit={handleEditFaculty} />
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