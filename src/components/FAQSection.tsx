import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PencilRuler, Clock, Monitor, ClipboardList, Briefcase, DollarSign } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  id?: string; // Added id prop
}

const FAQSection: React.FC<FAQSectionProps> = ({ id }) => {
  const faqs = [
    {
      icon: PencilRuler,
      question: 'What programs do you offer?',
      answer: 'We provide comprehensive design programs in fashion, graphic, interior, and textile design.',
    },
    {
      icon: Clock,
      question: 'How long are the courses?',
      answer: 'Course durations range from short workshops to full-time diploma and degree programs.',
    },
    {
      icon: Monitor,
      question: 'Are online options available?',
      answer: 'Yes, we offer flexible online and hybrid learning options for many programs.',
    },
    {
      icon: ClipboardList,
      question: 'What are the admission requirements?',
      answer: 'Requirements vary by program, but typically include a portfolio and academic qualifications.',
    },
    {
      icon: Briefcase,
      question: 'Do you offer career support?',
      answer: 'We provide comprehensive career guidance, portfolio development, and industry networking.',
    },
    {
      icon: DollarSign,
      question: 'How much do programs cost?',
      answer: 'Tuition varies by program. We offer scholarships and flexible payment options.',
    },
  ];

  return (
    <section id={id} className="pt-4 sm:pt-6 md:pt-8 pb-12 md:pb-16 px-4 md:px-8 lg:px-[80px] bg-background">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
        <AnimateOnScroll delay={100}>
          <h2 className="text-h2-mobile md:text-h2-desktop font-heading mb-4 text-foreground font-bold">
            Frequently asked <span className="text-primary font-heading">questions</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 max-w-2xl mx-auto">
            Common questions about our design programs and admission process.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="max-w-3xl mx-auto text-left mb-12 md:mb-16">
        <AnimateOnScroll delay={300}>
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-100 border-t border-b border-gray-100">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b-0 py-1">
                <AccordionTrigger className="text-base md:text-lg font-heading font-bold text-foreground hover:text-primary hover:no-underline py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-left">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-primary flex-shrink-0">
                      <faq.icon className="h-4 w-4" />
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-text-regular font-body text-gray-600 pl-12 pb-4 leading-relaxed pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimateOnScroll>
      </div>

      <div className="text-center">
        <AnimateOnScroll delay={100}>
          <h3 className="text-h3-mobile md:text-h3-desktop font-heading mb-4 text-foreground">
            Need more information?
          </h3>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <p className="text-text-medium font-body text-gray-600 mb-8 max-w-xl mx-auto">
            Our admissions team is ready to answer your specific questions.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={300}>
          <Button asChild variant="outline" className="px-6 py-3 text-text-regular border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <Link to="/contact">Contact</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQSection;