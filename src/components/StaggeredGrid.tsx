'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
}

export const StaggeredGrid = ({
  children,
  className = "",
  staggerDelay = 0.1,
  animationDuration = 0.6
}: StaggeredGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: animationDuration,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};