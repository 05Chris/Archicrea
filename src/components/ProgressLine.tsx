'use client';

import { motion } from 'framer-motion';

interface ProgressLineProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export const ProgressLine = ({ 
  className = "",
  delay = 0,
  duration = 1.2
}: ProgressLineProps) => {
  return (
    <motion.hr
      className={`border-t border-[#D7A645] ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ transformOrigin: "left center" }}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    />
  );
};