'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Hotel, Network, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      id: 'technical-security',
      icon: Shield,
      image: '/images/technical-security.jpg',
    },
    {
      id: 'hotel-systems',
      icon: Hotel,
      image: '/images/hotel-systems.jpg',
    },
    {
      id: 'structured-cabling',
      icon: Network,
      image: '/images/structured-cabling.jpg',
    },
    {
      id: 'automation',
      icon: Lightbulb,
      image: '/images/automation.jpg',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          {t('services.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
        >
          {t('services.subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${category.id}`}>
                <div className="group relative h-[300px] bg-[#181818] rounded-lg overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10" />
                  <Image
                    src={category.image}
                    alt={t(`services.categories.${category.id}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <div className="flex items-center space-x-3 mb-2">
                      <category.icon className="w-6 h-6 text-mint" />
                      <h3 className="text-2xl font-bold text-white">
                        {t(`services.categories.${category.id}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      {t(`services.categories.${category.id}.description`)}
                    </p>
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