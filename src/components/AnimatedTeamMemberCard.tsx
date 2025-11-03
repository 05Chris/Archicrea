'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

interface AnimatedTeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  alt: string;
}

export const AnimatedTeamMemberCard = ({ 
  name, 
  position, 
  image, 
  alt 
}: AnimatedTeamMemberCardProps) => {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-[15px] h-[367px] w-[258px] mx-auto shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden group-hover:scale-110 duration-500 transition">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
            /> */}
            <div
              className='bg-cover w-full h-full bg-no-repeat bg-center'
              style={{
                backgroundImage: `url('${image}')`,
              }}
            />
          </motion.div>
          
          {/* Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Badge Container */}
        <div className="absolute bottom-0 left-0">
          <motion.div
            className="bg-[url('/lg-clippath-green.svg')] w-[260px] h-[119px] bg-no-repeat bg-bottom-left flex flex-col justify-end pl-3 pb-4 text-white"
            whileHover={{ 
              filter: "brightness(1.05) drop-shadow(0 0 8px rgba(192, 210, 44, 0.2))",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="font-bold leading-tight w-40 drop-shadow-md"
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h3>
            <motion.p 
              className="text-sm mt-1 drop-shadow-sm"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {position}
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Badge Effect */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 bg-[#C0D22C] rounded-full opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ 
            scale: 1, 
            rotate: 360,
            transition: { duration: 0.5, ease: "backOut" }
          }}
        />
      </div>
    </motion.div>
  );
};