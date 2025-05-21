'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-mint text-black'
            : 'text-white hover:text-mint'
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('me')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'me'
            ? 'bg-mint text-black'
            : 'text-white hover:text-mint'
        }`}
      >
        ME
      </motion.button>
    </div>
  );
} 