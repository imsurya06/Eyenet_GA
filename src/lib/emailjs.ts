import emailjs from '@emailjs/browser';

// Central EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  TEMPLATES: {
    ADMISSIONS: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMISSIONS || 'YOUR_ADMISSIONS_TEMPLATE_ID',
    CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'YOUR_CONTACT_TEMPLATE_ID',
    SERVICES: import.meta.env.VITE_EMAILJS_TEMPLATE_SERVICES || 'YOUR_SERVICES_TEMPLATE_ID',
  },
};

/**
 * Send an email notification using EmailJS
 */
export const sendEmailJSNotification = async (
  templateId: string,
  templateParams: Record<string, unknown>
) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Submission Error:', error);
    return { success: false, error };
  }
};
