"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AdminHeader from '@/components/AdminHeader';
import AdminTestimonialCard from '@/components/AdminTestimonialCard';
import AdminAddTestimonialDialog from '@/components/AdminAddTestimonialDialog';
import { useTestimonials } from '@/context/TestimonialContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Filter, MessageSquareText, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/data/testimonials';

const filterItems = [
  { name: 'All Testimonials', status: null, icon: MessageSquareText },
  { name: 'Approved', status: 'approved', icon: CheckCircle },
  { name: 'Pending Review', status: 'pending', icon: Clock },
];

const AdminTestimonials = () => {
  const [searchParams] = useSearchParams();
  const statusFilter = searchParams.get('status');
  const { testimonials, deleteTestimonial, addTestimonial, updateTestimonial } = useTestimonials();
  const [isAddTestimonialDialogOpen, setIsAddTestimonialDialogOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);

  const filteredTestimonials = React.useMemo(() => {
    if (!statusFilter) {
      return testimonials;
    }
    if (statusFilter === 'approved') {
      return testimonials.filter(test => test.approved === true);
    }
    if (statusFilter === 'pending') {
      return testimonials.filter(test => test.approved === false);
    }
    return testimonials;
  }, [statusFilter, testimonials]);

  const handleAddTestimonialClick = () => {
    setEditingTestimonial(null); // Ensure we're in "add" mode
    setIsAddTestimonialDialogOpen(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial); // Set the item to be edited
    setIsAddTestimonialDialogOpen(true);
  };

  const handleSaveTestimonial = (testimonial: Testimonial) => {
    if (editingTestimonial) {
      updateTestimonial(testimonial); // Update existing item
    } else {
      addTestimonial(testimonial); // Add new item
    }
    setIsAddTestimonialDialogOpen(false); // Close dialog after saving
    setEditingTestimonial(null); // Reset editing state
  };

  const handleToggleApproval = async (testimonial: Testimonial) => {
    const updatedTestimonial = { ...testimonial, approved: !testimonial.approved };
    await updateTestimonial(updatedTestimonial);
  };

  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false);
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenFilterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsFilterDropdownOpen(true);
  };

  const handleCloseFilterDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsFilterDropdownOpen(false);
    }, 150);
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader pageTitle="Testimonials" />
      
      <div className="bg-background border-b border-border p-6 md:p-8 lg:p-10 flex items-center justify-between">
        <h3 className="text-h4-mobile md:text-h4-desktop font-heading text-foreground">
          Student Testimonials
        </h3>
        <DropdownMenu open={isFilterDropdownOpen} onOpenChange={setIsFilterDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="px-4 py-2 text-text-regular border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onMouseEnter={handleOpenFilterDropdown}
              onMouseLeave={handleCloseFilterDropdown}
            >
              Filter <Filter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 p-1 bg-muted data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-300"
            align="end"
            sideOffset={10}
            alignOffset={-5}
            onMouseEnter={handleOpenFilterDropdown}
            onMouseLeave={handleCloseFilterDropdown}
          >
            {filterItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-text-regular font-body transition-colors hover:bg-accent hover:text-accent-foreground rounded-sm w-full justify-start",
                      statusFilter === item.status ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => {
                      if (item.status) {
                        window.location.href = `/admin-dashboard/testimonials?status=${item.status}`;
                      } else {
                        window.location.href = `/admin-dashboard/testimonials`;
                      }
                      setIsFilterDropdownOpen(false);
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Button>
                </DropdownMenuItem>
                {index < filterItems.length - 1 && <DropdownMenuSeparator className="my-1" />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex-1 p-6 md:p-8 lg:p-10 bg-gray-50">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-8 text-foreground text-center">
            {statusFilter === 'approved' ? 'Approved Testimonials' : statusFilter === 'pending' ? 'Pending Testimonials' : 'All Testimonials'}
          </h2>
        </AnimateOnScroll>
        
        {filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredTestimonials.map((item, index) => (
              <AnimateOnScroll key={item.id} delay={200 + index * 50}>
                <AdminTestimonialCard
                  testimonial={item}
                  onDelete={deleteTestimonial}
                  onEdit={handleEditTestimonial}
                  onToggleApproval={handleToggleApproval}
                />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll delay={200}>
            <p className="text-text-medium font-body text-gray-600 text-center">
              No testimonials found for this status.
            </p>
          </AnimateOnScroll>
        )}
      </div>

      <AdminAddTestimonialDialog
        open={isAddTestimonialDialogOpen}
        onOpenChange={setIsAddTestimonialDialogOpen}
        editingTestimonial={editingTestimonial}
        onSave={handleSaveTestimonial}
      />
    </div>
  );
};
export default AdminTestimonials;