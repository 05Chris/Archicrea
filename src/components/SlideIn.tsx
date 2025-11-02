'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInProps {
  children: ReactNode;
  direction: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideIn = ({ 
  children, 
  direction,
  delay = 0, 
  duration = 0.8,
  className = "" 
}: SlideInProps) => {
  const initialX = direction === 'left' ? -100 : 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};