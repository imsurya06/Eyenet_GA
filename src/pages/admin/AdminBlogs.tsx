"use client";
import React, { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import AdminHeader from '@/components/AdminHeader';
import AdminBlogCard from '@/components/AdminBlogCard';
import AdminAddBlogDialog from '@/components/AdminAddBlogDialog';
import { useBlogs } from '@/context/BlogContext';
import { Blog } from '@/data/blogs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const AdminBlogs = () => {
  const { blogs, addBlog, deleteBlog, updateBlog } = useBlogs();
  const [isAddBlogDialogOpen, setIsAddBlogDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const pendingBlogs = blogs.filter(blog => blog.status === 'pending');
  const publishedBlogs = blogs.filter(blog => blog.status === 'approved');

  const handleAddBlogClick = () => {
    setEditingBlog(null);
    setIsAddBlogDialogOpen(true);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setIsAddBlogDialogOpen(true);
  };

  const handleSaveBlog = (blog: Blog) => {
    if (editingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    setIsAddBlogDialogOpen(false);
    setEditingBlog(null);
  };

  const handleApproveBlog = async (blog: Blog) => {
    try {
      await updateBlog({ ...blog, status: 'approved' });
      toast.success(`Approved "${blog.title}"`);
    } catch (error) {
      console.error("Failed to approve blog", error);
      toast.error("Failed to approve blog");
    }
  };

  const handleRejectBlog = async (blog: Blog) => {
    // For now, rejection might just delete or set to rejected. Let's set to rejected.
    // Or maybe delete? The prompt implies "approve it then only it should be displayed".
    // Let's set status to 'rejected' so it's not deleted but hidden.
    try {
      await updateBlog({ ...blog, status: 'rejected' });
      toast.success(`Rejected "${blog.title}"`);
    } catch (error) {
      console.error("Failed to reject blog", error);
      toast.error("Failed to reject blog");
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <AdminHeader pageTitle="Blogs" />
      <div className="flex-1 p-6 md:p-8 lg:p-10 bg-gray-50">
        <AnimateOnScroll delay={100}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-h2-mobile md:text-h2-desktop font-heading text-foreground">
              Manage Blog Posts
            </h2>
            <Button onClick={handleAddBlogClick} className="bg-primary text-white">
              Add New Blog
            </Button>
          </div>
        </AnimateOnScroll>

        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-8">
            <TabsTrigger value="pending">Pending Review ({pendingBlogs.length})</TabsTrigger>
            <TabsTrigger value="published">Published ({publishedBlogs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            {pendingBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pendingBlogs.map((blog, index) => (
                  <AnimateOnScroll key={blog.id} delay={200 + index * 50}>
                    <div className="relative">
                      <AdminBlogCard blog={blog} onDelete={deleteBlog} onEdit={handleEditBlog} />
                      <div className="absolute top-2 right-2 flex gap-2 z-10">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 h-8 w-8 p-0" onClick={() => handleApproveBlog(blog)} title="Approve">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </Button>
                        <Button size="sm" variant="destructive" className="h-8 w-8 p-0" onClick={() => handleRejectBlog(blog)} title="Reject">
                          <XCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm z-10">
                        Pending
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            ) : (
              <p className="text-text-medium font-body text-gray-600 text-center py-10">
                No pending blogs to review.
              </p>
            )}
          </TabsContent>

          <TabsContent value="published">
            {publishedBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {publishedBlogs.map((blog, index) => (
                  <AnimateOnScroll key={blog.id} delay={200 + index * 50}>
                    <div className="relative">
                      <AdminBlogCard blog={blog} onDelete={deleteBlog} onEdit={handleEditBlog} />
                      <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm z-10">
                        Published
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            ) : (
              <p className="text-text-medium font-body text-gray-600 text-center py-10">
                No published blogs yet.
              </p>
            )}
          </TabsContent>
        </Tabs>

      </div>

      <AdminAddBlogDialog
        open={isAddBlogDialogOpen}
        onOpenChange={setIsAddBlogDialogOpen}
        editingBlog={editingBlog}
        onSave={handleSaveBlog}
      />
    </div>
  );
};
export default AdminBlogs;