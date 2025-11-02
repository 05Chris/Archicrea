'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MasonryColumnProps {
  children: ReactNode;
  columnIndex: number;
  className?: string;
}

export const MasonryColumn = ({ 
  children, 
  columnIndex, 
  className = "" 
}: MasonryColumnProps) => {
  const columnVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: columnIndex * 0.2,
        ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: columnIndex * 0.2 + 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={columnVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) : 
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      }
    </motion.div>
  );
};