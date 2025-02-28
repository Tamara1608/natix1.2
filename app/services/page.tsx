'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Hotel, Network, Lightbulb } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      id: 'technical-security',
      title: 'Technical Security',
      description: 'Advanced security systems including intrusion protection, video surveillance, and access control.',
      icon: Shield,
      image: '/images/technical-security.jpg',
    },
    {
      id: 'hotel-systems',
      title: 'Hotel Systems',
      description: 'Comprehensive hotel management and security solutions for hospitality industry.',
      icon: Hotel,
      image: '/images/hotel-systems.jpg',
    },
    {
      id: 'structured-cabling',
      title: 'Structured Cabling Systems',
      description: 'Professional communication infrastructure and networking solutions.',
      icon: Network,
      image: '/images/structured-cabling.jpg',
    },
    {
      id: 'automation',
      title: 'Lightning & Heating Automatization',
      description: 'Smart automation solutions for lighting and heating systems.',
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
          Our <span className="text-mint">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-center mb-16 max-w-2xl mx-auto"
        >
          Discover our comprehensive range of security and automation solutions
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
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <div className="flex items-center space-x-3 mb-2">
                      <category.icon className="w-6 h-6 text-mint" />
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-gray-300">{category.description}</p>
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