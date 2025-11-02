'use client';

import { motion } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export const SmoothScrollLink = ({ children, to, className = "" }: SmoothScrollProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
};