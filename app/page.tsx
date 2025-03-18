'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Security System"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Secure Your World with <span className="text-mint">NATIX</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Professional security systems and solutions for homes and businesses.
            Experience peace of mind with our cutting-edge technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-mint text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#products-preview"
              onClick={(e) => scrollToSection(e, '#products-preview')}
              className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose <span className="text-mint">NATIX</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive security solutions with cutting-edge technology
              and professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Advanced Security',
                description:
                  'State-of-the-art security systems with the latest technology',
              },
              {
                icon: Users,
                title: 'Expert Installation',
                description:
                  'Professional installation by certified security specialists',
              },
              {
                icon: Clock,
                title: '24/7 Monitoring',
                description:
                  'Round-the-clock monitoring and immediate response to alerts',
              },
              {
                icon: Lock,
                title: 'Access Control',
                description:
                  'Smart access control systems for enhanced security',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow group"
              >
                <feature.icon className="w-12 h-12 text-mint mx-auto mb-4 transform transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services-preview" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our <span className="text-mint">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of security and automation solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Security Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security systems for your home and business, including
                  surveillance, access control, and intrusion detection.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-mint hover:text-mint/80 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Automation Systems</h3>
                <p className="text-gray-600 mb-6">
                  Smart automation solutions for lighting, heating, and energy management,
                  designed for efficiency and comfort.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-mint hover:text-mint/80 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-mint text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="products-preview"
        className="py-20 bg-black relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-black -z-10 h-12 top-0"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-mint">Products</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of security and automation solutions
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-8 pb-4">
                {[
                  {
                    title: 'Technical Security',
                    description: 'Advanced security systems including intrusion protection, video surveillance, and access control.',
                    image: '/images/products/technical-security.jpg',
                    href: '/products/technical-security'
                  },
                  {
                    title: 'Hotel Systems',
                    description: 'Comprehensive hotel management and security solutions for hospitality industry.',
                    image: '/images/products/hotel-system.jpg',
                    href: '/products/hotel-systems'
                  },
                  {
                    title: 'Structured Cabling networks & Communication',
                    description: 'Professional communication infrastructure and networking solutions.',
                    image: '/images/products/structured-cabling-system.jpg',
                    href: '/products/structured-cabling'
                  },
                  {
                    title: 'Smart Home',
                    description: 'Smart automation solutions for lighting and heating systems.',
                    image: '/images/products/home-security.jpeg',
                    href: '/products/automation'
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[600px] flex-shrink-0"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={category.href}>
                      <div className="group relative h-[400px] bg-[#181818] rounded-lg overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                          <h3 className="text-2xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:translate-x-2">
                            {category.title}
                          </h3>
                          <p className="text-gray-300 mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
                            {category.description}
                          </p>
                          <div className="flex items-center text-mint transform transition-transform duration-500 group-hover:translate-x-2">
                            <span className="mr-2">Learn More</span>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-l from-black to-transparent z-10" />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-6">Scroll horizontally to explore more products</p>
            <Link
              href="/products"
              className="inline-flex items-center bg-mint text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Separator Section */}
      <div className="h-16 bg-gradient-to-b from-black to-[#181818]"></div>

      {/* Contact Section */}
      <section id="contact" className="bg-[#181818] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-mint">Secure</span> Your Property?
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact us today for a free consultation and security assessment.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Separator Section for Footer */}
      <div className="h-16 bg-gradient-to-b from-[#181818] to-[#111111]"></div>
    </div>
  );
} 