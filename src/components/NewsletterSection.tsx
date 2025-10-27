import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-8 lg:px-[80px] bg-background text-center">
      <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4 text-foreground">
        Stay connected
      </h2>
      <p className="text-text-medium font-body text-gray-600 mb-8 max-w-2xl mx-auto">
        Receive the latest updates, course information, and design industry insights.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter email address"
          className="flex-grow max-w-xs sm:max-w-none h-12 px-4 py-2 text-text-regular border border-input bg-muted focus-visible:ring-ring focus-visible:ring-offset-background"
        />
        <Button className="h-12 px-6 py-2 text-text-regular bg-primary hover:bg-primary/90 text-primary-foreground">
          Sign up
        </Button>
      </div>
      <p className="text-text-small font-body text-gray-500 max-w-md mx-auto">
        By signing up, you agree to receive our newsletter and program updates.
      </p>
    </section>
  );
};

export default NewsletterSection;