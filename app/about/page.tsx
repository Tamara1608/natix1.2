'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Target } from 'lucide-react';

export default function About() {
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
            About <span className="text-mint">NATIX</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Leading provider of professional security systems and smart solutions
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                NATIX was founded with a clear vision: to provide cutting-edge security solutions that bring peace of mind to our clients. With years of experience in the security industry, we&apos;ve established ourselves as a trusted partner for both residential and commercial security needs.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: 'Excellence',
                description: 'We strive for excellence in every installation and service we provide.',
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Our clients needs and satisfaction are at the heart of everything we do.',
              },
              {
                icon: Clock,
                title: 'Reliability',
                description: '24/7 support and maintenance to ensure your security systems are always operational.',
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Continuously adopting the latest security technologies and solutions.',
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
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                To deliver innovative and reliable security solutions that protect what matters most to our clients, while providing exceptional service and technical expertise that exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#181818] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-justify">
                To be the leading provider of integrated security solutions in Montenegro, recognized for our innovation, reliability, and commitment to customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 