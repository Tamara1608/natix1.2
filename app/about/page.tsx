'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background/option3.jpg"
            alt="About NATIX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t('nav.about')} <span className="text-mint">NATIX</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('about.story.description')}
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: t('about.values.excellence.title'),
                description: t('about.values.excellence.description'),
              },
              {
                icon: Users,
                title: t('about.values.customer.title'),
                description: t('about.values.customer.description'),
              },
              {
                icon: Clock,
                title: t('about.values.reliability.title'),
                description: t('about.values.reliability.description'),
              },
              {
                icon: Target,
                title: t('about.values.innovation.title'),
                description: t('about.values.innovation.description'),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#181818] p-6 rounded-lg text-center"
              >
                <value.icon className="w-12 h-12 text-mint mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#181818] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{t('about.mission.title')}</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                {t('about.mission.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#181818] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{t('about.vision.title')}</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                {t('about.vision.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 