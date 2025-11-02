'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedCardProps {
  src: string;
  alt: string;
  title: string;
  badgeColor: 'blue' | 'green' | 'orange';
  delay?: number;
  direction?: 'left' | 'right' | 'up';
}

export const AnimatedCard = ({
  src,
  alt,
  title,
  badgeColor,
  delay = 0,
  direction = 'up'
}: AnimatedCardProps) => {
  const badgeImages = {
    blue: '/md-clippath-blue.svg',
    green: '/md-clippath-green.svg',
    orange: '/md-clippath-orange.svg'
  };

  const getInitialPosition = () => {
    switch (direction) {
      case 'left': return { x: -100, y: 0 };
      case 'right': return { x: 100, y: 0 };
      case 'up': return { x: 0, y: 100 };
      default: return { x: 0, y: 100 };
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...getInitialPosition(),
        scale: 0.8
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg h-[300px] shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute bottom-4 left-4 xl:bottom-6 xl:left-6 transform group-hover:scale-110 transition-transform duration-300">
          <div
            className="bg-no-repeat bg-contain pl-3 pt-5 xl:pt-2 w-[126px] h-[58px] group-hover:brightness-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
            style={{ backgroundImage: `url('${badgeImages[badgeColor]}')` }}
          >
            <h3 className="text-white font-bold text-2xl xl:text-[32px] mb-2 text-nowrap group-hover:text-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};