'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Hotel, Network, Lightbulb } from 'lucide-react';

const serviceCategories = {
  'technical-security': {
    title: 'Technical Security',
    description: 'Advanced security systems for comprehensive protection',
    icon: Shield,
    services: [
      {
        title: 'Intrusion Protection',
        description: 'Wired and wireless intrusion protection devices with advanced detection technology.',
        image: '/images/intrusion-protection.jpg',
      },
      {
        title: 'Video Surveillance',
        description: 'High-resolution cameras with smart detection and 24/7 monitoring capabilities.',
        image: '/images/video-surveillance.jpg',
      },
      {
        title: 'Access Control',
        description: 'Smart access control systems with biometric and card-based authentication.',
        image: '/images/access-control.jpg',
      },
    ],
  },
  'hotel-systems': {
    title: 'Hotel Systems',
    description: 'Complete security and management solutions for hotels',
    icon: Hotel,
    services: [
      {
        title: 'Room Management',
        description: 'Smart room management systems with integrated security features.',
        image: '/images/room-management.jpg',
      },
      {
        title: 'Access Systems',
        description: 'Hotel-specific access control with guest and staff management.',
        image: '/images/hotel-access.jpg',
      },
      {
        title: 'Energy Management',
        description: 'Efficient energy management solutions for hotel rooms.',
        image: '/images/energy-management.jpg',
      },
    ],
  },
  'structured-cabling': {
    title: 'Structured Cabling Systems',
    description: 'Professional networking and communication infrastructure',
    icon: Network,
    services: [
      {
        title: 'Network Infrastructure',
        description: 'Complete network cabling solutions for businesses.',
        image: '/images/network-infrastructure.jpg',
      },
      {
        title: 'Fiber Optics',
        description: 'High-speed fiber optic cabling for reliable data transmission.',
        image: '/images/fiber-optics.jpg',
      },
      {
        title: 'Communication Systems',
        description: 'Integrated communication systems for enterprise environments.',
        image: '/images/communication-systems.jpg',
      },
    ],
  },
  'automation': {
    title: 'Lightning & Heating Automatization',
    description: 'Smart automation solutions for enhanced comfort',
    icon: Lightbulb,
    services: [
      {
        title: 'Smart Lighting',
        description: 'Automated lighting systems with scheduling and scene control.',
        image: '/images/smart-lighting.jpg',
      },
      {
        title: 'Climate Control',
        description: 'Intelligent heating and cooling automation systems.',
        image: '/images/climate-control.jpg',
      },
      {
        title: 'Energy Efficiency',
        description: 'Smart solutions for optimal energy consumption.',
        image: '/images/energy-efficiency.jpg',
      },
    ],
  },
};

export default function ServiceCategory() {
  const params = useParams();
  const category = params.category as string;
  const categoryData = serviceCategories[category as keyof typeof serviceCategories];

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  const CategoryIcon = categoryData.icon;

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/services"
          className="inline-flex items-center text-gray-300 hover:text-mint transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-4">
            <CategoryIcon className="w-8 h-8 text-mint" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">{categoryData.title}</h1>
          </div>
          <p className="text-gray-300 text-xl">{categoryData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#181818] rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 