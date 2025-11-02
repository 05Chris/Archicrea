'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({ 
  from, 
  to, 
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = ""
}: CountUpProps) => {
  const [count, setCount] = useState(from);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const timer = setTimeout(() => {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / (duration * 1000), 1);
              
              // Easing function pour un effet plus naturel
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(from + (to - from) * easeOutCubic);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            animate();
          }, delay * 1000);

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [from, to, duration, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "backOut" }}
      className={className}
    >
      {prefix}{count}{suffix}
    </motion.div>
  );
};