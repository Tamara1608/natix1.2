'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || t('contact.form.error'));
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(t('contact.form.error'));
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-4 sm:mt-8 space-y-4 sm:space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white text-sm sm:text-base"
          placeholder={t('contact.form.namePlaceholder')}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white text-sm sm:text-base"
          placeholder={t('contact.form.emailPlaceholder')}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
          {t('contact.form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white text-sm sm:text-base"
          placeholder={t('contact.form.phonePlaceholder')}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint text-white resize-none text-sm sm:text-base"
          placeholder={t('contact.form.messagePlaceholder')}
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-mint text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
      >
        {isSubmitting ? t('common.sending') : t('common.sendMessage')}
      </button>

      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-mint text-center text-sm"
        >
          {t('contact.form.success')}
        </motion.p>
      )}
      
      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-center text-sm"
        >
          {errorMessage}
        </motion.p>
      )}
    </motion.form>
  );
} 