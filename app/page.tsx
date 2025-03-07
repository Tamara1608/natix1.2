'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen w-full relative bg-[#020817] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/coming_soon/S84-27031~large.jpg"
          alt="Astronaut in Space"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        {/* Dark overlay with multiple gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-transparent to-[#020817]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/50 via-transparent to-[#020817]/50" />
      </div>

      {/* NATIX Logo - Positioned higher with responsive top margin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 sm:top-8 md:top-12 left-0 right-0 flex justify-center"
      >
        <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[250px] lg:h-[250px] relative">
          <Image
            src="/images/logo/natix-white-logo.png"
            alt="NATIX Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Main Content - Centered in viewport */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <p className="text-gray-400 mb-4 tracking-widest">SITE UNDER RECONSTRUCTION</p>
          <h1 className="text-5xl md:text-7xl text-white font-light tracking-[0.2em] mb-8">
            COMING SOON
          </h1>
          
          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto h-2 bg-gray-800 rounded-full overflow-hidden mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "62%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B]"
            />
          </div>

          {/* Location */}
          <div className="text-gray-400 tracking-wider text-sm">
            OUR LOCATION
            <p className="text-white mt-1">PODGORICA, MONTENEGRO</p>
          </div>
        </motion.div>
      </div>

      {/* Contact Information at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12"
          >
            <div className="text-gray-400 tracking-wider text-sm text-center">
              EMAIL
              <p className="text-white mt-1">natixoffice@gmail.com</p>
            </div>
            <div className="text-gray-400 tracking-wider text-sm text-center">
              PHONE
              <p className="text-white mt-1">+382 69 010 162</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 