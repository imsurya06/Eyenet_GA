"use client";

import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const categories = [
  { value: 'all', label: 'All posts' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'computer', label: 'Computer' },
  { value: 'student-life', label: 'Student Life' },
  { value: 'industry-insights', label: 'Industry Insights' },
];

const BlogFilter = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (value: string) => {
    if (value === 'all') {
      navigate('/explore/students-zone');
    } else {
      navigate(`/explore/students-zone?category=${value}`);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto mb-12">
      <Select onValueChange={handleCategoryChange} value={currentCategory}>
        <SelectTrigger className="w-full h-12 px-4 py-2 text-text-regular border border-input bg-muted focus:ring-ring focus:ring-offset-background">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat.value} value={cat.value}>
              {cat.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogFilter;