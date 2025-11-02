'use client';

import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
}

export const FloatingElement = ({
  children,
  className = ""
}: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 5, 10, 0],
        y: [0, -5, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};