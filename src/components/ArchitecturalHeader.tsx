'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ArchitecturalHeaderProps {
  title: string;
  description?: string;
}

export const ArchitecturalHeader = ({ 
  title, 
  description 
}: ArchitecturalHeaderProps) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsDrawing(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Split title into characters for typewriter effect
  const titleChars = title.split('');

  return (
    <div className="text-center space-y-8 my-10">
      {/* Blueprint Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(192, 210, 44, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 210, 44, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1 }}
      />

      {/* Drawing Tools Animation */}
      <motion.div
        className="flex justify-center items-center space-x-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Compass Animation */}
        <motion.div
          className="w-8 h-8 border-2 border-[#C0D22C] rounded-full relative"
          animate={{ rotate: isDrawing ? 360 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-4 bg-[#C0D22C] origin-bottom"
            style={{ transform: 'translate(-50%, -100%)' }}
            animate={{ rotate: isDrawing ? [0, 45, -45, 0] : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Ruler Animation */}
        <motion.div
          className="w-16 h-1 bg-[#00AAE5] relative"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-2 bg-[#00AAE5]"
                style={{ left: `${i * 25}%`, top: '-2px' }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Pencil Animation */}
        <motion.div
          className="w-1 h-8 bg-linear-to-t from-yellow-600 to-yellow-400 rounded-full relative"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-gray-800" />
        </motion.div>
      </motion.div>

      {/* Animated Title */}
      <div className="relative">
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {titleChars.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 1.2 + index * 0.05,
                ease: "easeOut" 
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Underline Drawing Effect */}
        <motion.div
          className="absolute -bottom-2 left-1/2 h-0.5 bg-[#C0D22C]"
          initial={{ width: 0, x: '-50%' }}
          animate={{ width: '100%' }}
          transition={{ 
            duration: 1.5, 
            delay: 1.5 + titleChars.length * 0.05,
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Description Animation */}
      {description && (
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 2 + titleChars.length * 0.05 
          }}
        >
          <p className="text-xs md:text-base lg:text-lg text-[#444444] md:leading-5">
            {description}
          </p>
        </motion.div>
      )}

      {/* Blueprint Corner Decorations */}
      <motion.div
        className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#C0D22C]/30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-[#C0D22C]/30"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 2.7 }}
      />
    </div>
  );
};