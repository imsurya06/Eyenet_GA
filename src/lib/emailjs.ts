import emailjs from '@emailjs/browser';

// Central EmailJS Configuration
const defaultTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ADMISSIONS || 'template_b2o0hse';

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_fi2oe1i',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'q6Z-hRqiUj0_J1Qps',
  TEMPLATES: {
    MASTER: defaultTemplate,
    ADMISSIONS: import.meta.env.VITE_EMAILJS_TEMPLATE_ADMISSIONS || defaultTemplate,
    CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || defaultTemplate,
    SERVICES: import.meta.env.VITE_EMAILJS_TEMPLATE_SERVICES || defaultTemplate,
  },
};

let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN_MS = 3000; // 3 seconds gap between form submissions

/**
 * Send an email notification using EmailJS
 */
export const sendEmailJSNotification = async (
  templateId: string,
  templateParams: Record<string, unknown>
) => {
  const now = Date.now();
  if (now - lastSubmissionTime < SUBMISSION_COOLDOWN_MS) {
    console.warn('Duplicate email submission blocked by rate-limiting cooldown.');
    return { success: false, rateLimited: true };
  }
  lastSubmissionTime = now;

  try {
    const payload = {
      to_email: 'eyenetfashion@gmail.com',
      to_name: 'Eyenet Educational Academy',
      reply_to: (templateParams.from_email as string) || 'eyenetfashion@gmail.com',
      ...templateParams,
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      templateId,
      payload,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Submission Error:', error);
    return { success: false, error };
  }
};
