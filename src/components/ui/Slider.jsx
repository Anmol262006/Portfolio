import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Slider = ({ skills, heading }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 lg:px-7 mt-16"
    >
      {/* Container upgraded to a dark bento-box panel */}
      <div className="px-6 md:px-12 py-12 rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-950 shadow-2xl relative overflow-hidden">
        
        {/* Abstract background ambient mesh glows */}
        <div className="absolute -left-20 -top-20 w-64 h-64 bg-violet-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-600/10 blur-[100px] pointer-events-none" />
        
        {/* Modern Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[0.25em] bg-violet-950/50 border border-violet-800/50 px-4 py-1.5 rounded-full mb-3 shadow-inner">
          {heading || "Basic Knowledge"}
          </span>
          
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 1, // Set to 1 for continuous marquee effect
            disableOnInteraction: false,
          }}
          speed={3000} // Smooth, uninterrupted sliding speed
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 24 }, // Show 5 cards on desktop for better density
          }}
          className="py-4 swiper-linear-marquee"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SwiperSlide key={index} className="py-2">
                <motion.div 
                  whileHover={{ 
                    y: -6,
                    borderColor: skill.color,
                    boxShadow: `0 10px 30px -10px ${skill.color}40`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col items-center justify-center p-6 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl transition-colors duration-300 group"
                >
                  {/* Icon Container with Adaptive Glow */}
                  <div
                    className="p-4 rounded-xl mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      border: `1px solid ${skill.color}30`
                    }}
                  >
                    <IconComponent 
                      size={36} 
                      className="transition-transform duration-300"
                      style={{ color: skill.color }} 
                    />
                  </div>
                  
                  {/* Skill Title */}
                  <h3 className="text-base font-bold text-zinc-300 tracking-wide transition-colors duration-300 group-hover:text-white">
                    {skill.name}
                  </h3>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Slider;
