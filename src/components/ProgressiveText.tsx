'use client';

import { motion } from 'framer-motion';

interface ProgressiveTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ProgressiveText = ({
  children,
  delay = 0,
  className = ""
}: ProgressiveTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};