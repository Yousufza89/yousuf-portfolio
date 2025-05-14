import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const LetsCollaborate: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
        formRef.current!,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ''
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ from_name: '', reply_to: '', message: '' });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Failed to send message. Please try again later.',
      });
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/your-username', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring
            your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring-primary-light dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring-primary-light dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-light focus:ring-primary-light dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-md ${
                    status.error
                      ? 'bg-red-50 text-red-700 dark:bg-red-900/50 dark:text-red-200'
                      : 'bg-green-50 text-green-700 dark:bg-green-900/50 dark:text-green-200'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full px-6 py-3 rounded-lg text-white font-medium transition-colors ${
                  status.submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-light dark:bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary-light'
                }`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Schedule a Meeting</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Book a time slot that works for you to discuss your project in detail.
              </p>
              <button
                onClick={handleCalendlyClick}
                className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-dark dark:hover:bg-primary-light transition-colors"
              >
                Book a Meeting
              </button>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-primary-light dark:text-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:yousufrehan.04@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark"
                  >
                    yousufrehan.04@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-primary-light dark:text-primary-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">
                    Karachi, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetsCollaborate; 