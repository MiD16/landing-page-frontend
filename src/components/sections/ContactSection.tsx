import { useState, type FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Section, Button } from '../ui';
import { useInView } from '../../hooks/useInView';
import { api, type CompanyInfo } from '../../services/api';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await api.getCompanyInfo();
        setCompanyInfo(data);
      } catch (err) {
        console.error('Failed to load company information:', err);
      }
    };

    fetchCompanyInfo();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await api.submitContactMessage(formData);
      setSubmitMessage('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setSubmitMessage('Failed to send message. Please try again.');
      console.error('Failed to submit contact message:', err);
    } finally {
      setIsSubmitting(false);
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setSubmitMessage('');
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <Section id="contact">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-text-light text-lg max-w-6xl mx-auto px-4">
            Have a project in mind? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="w-full mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Fields in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-gray-900 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none overflow-y-auto text-gray-900 placeholder-gray-500"
                placeholder="Tell us about your project..."
                style={{ minHeight: '150px', maxHeight: '300px' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-5xl mx-auto"
        >
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Email</h4>
            <p className="text-text-light">{companyInfo?.contact_email || 'hello@archstudio.com'}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Phone</h4>
            <p className="text-text-light">{companyInfo?.contact_phone || '+1 (555) 123-4567'}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary mb-2">Address</h4>
            <p className="text-text-light">{companyInfo?.contact_address || '123 Architecture Ave, Design City'}</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ContactSection;
