'use client';

import { motion } from 'framer-motion';

interface RotatingLogoProps {
  className?: string;
}

export const RotatingLogo = ({
  className = ""
}: RotatingLogoProps) => {
  return (
    <motion.div
      className={`bg-[url('/archicrea-gold.svg')] bg-contain bg-center bg-no-repeat ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 }
      }}
    />
  );
};