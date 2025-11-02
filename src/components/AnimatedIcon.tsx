'use client';

import { motion } from 'framer-motion';

interface AnimatedIconProps {
  iconUrl: string;
  className?: string;
  animationType?: 'bounce' | 'rotate' | 'pulse';
  delay?: number;
}

export const AnimatedIcon = ({ 
  iconUrl, 
  className = "",
  animationType = 'bounce',
  delay = 0
}: AnimatedIconProps) => {
  return (
    <motion.div
      className={`bg-black bg-no-repeat bg-center rounded-[20px] ${className}`}
      style={{ backgroundImage: `url('${iconUrl}')` }}
      initial={{ scale: 0, rotate: animationType === 'rotate' ? -180 : 0 }}
      animate={{ scale: 1, rotate: 0 }}
      whileInView={{
        y: animationType === 'bounce' ? [0, -8, 0] : 0,
        rotate: animationType === 'rotate' ? [0, 360] : 0,
        scale: animationType === 'pulse' ? [1, 1.05, 1] : 1,
      }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        delay,
        ease: "backOut",
        repeat: animationType !== 'rotate' ? Infinity : Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }}
    />
  );
};