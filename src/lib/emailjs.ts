import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export interface EmailParams {
  form_type: 'Admission Application' | 'General Contact' | 'Service Inquiry';
  from_name: string;
  from_email?: string;
  from_phone?: string;
  program_or_service?: string;
  message?: string;
  qualification?: string;
  [key: string]: any;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

/**
 * Utility to send form submissions to email via EmailJS
 */
export const sendFormEmail = async (params: EmailParams): Promise<boolean> => {
  // If EmailJS credentials are fully set up
  if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: 'eyenetfashion@gmail.com',
          to_name: 'Eyenet Educational Academy',
          ...params,
        },
        PUBLIC_KEY
      );
      console.log('EmailJS Success:', response.status, response.text);
      return true;
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback message if EmailJS send fails
      return false;
    }
  } else {
    // Log for development mode when keys are not configured yet
    console.info('EmailJS Keys Not Configured Yet. Submission Payload:', params);
    return true;
  }
};
