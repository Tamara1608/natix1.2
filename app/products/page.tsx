'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const productCategories = [
  {
    id: 'technical-security',
    image: '/images/products/technical-security.jpg',
  },
  {
    id: 'hotel-systems',
    image: '/images/products/hotel-system.jpg',
  },
  {
    id: 'structured-cabling',
    image: '/images/products/structured-cabling-system.jpg',
  },
  {
    id: 'smart-home',
    image: '/images/products/home-security.jpeg',
  }
];

export default function Products() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          {t('products.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
        >
          {t('products.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${category.id}`}>
                <div className="group relative h-[400px] bg-[#181818] rounded-lg overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <Image
                    src={category.image}
                    alt={t(`products.categories.${category.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:translate-x-2">
                      {t(`products.categories.${category.id}.title`)}
                    </h3>
                    <p className="text-gray-300 mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
                      {t(`products.categories.${category.id}.description`)}
                    </p>
                    <div className="flex items-center text-mint transform transition-transform duration-500 group-hover:translate-x-2">
                      <span className="mr-2">{t('common.learnMore')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 