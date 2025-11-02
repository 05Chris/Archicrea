'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BounceBadgeProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export const BounceBadge = ({
  children,
  className = "",
  delay = 0
}: BounceBadgeProps) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: "backOut",
        scale: { type: "spring", stiffness: 300 }
      }}
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.5 }
      }}
      className={children ? className : `w-[74px] h-[34px] bg-[url('/sm-clippath-green.svg')] bg-contain bg-center bg-no-repeat cursor-pointer ${className}`}
    >
      {children || null}
    </motion.div>
  );
};