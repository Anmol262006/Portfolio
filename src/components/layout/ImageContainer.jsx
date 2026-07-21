import React from "react";
import profilePic from "../../assets/profile/Portfoliohero.webp";
import { motion } from "framer-motion";

const ImageContainer = () => {
  return (
    <motion.div
      initial={{  opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false , amount : 0.2 }}
      transition={{ duration: 0.9 }}
      whileHover={{ rotate: 6 }}
      className="relative w-[240px] sm:w-[290px] md:w-[320px] lg:w-[360px] aspect-[3/4] cursor-pointer"
    >
      {/* Glass Background Card */}
      <div
        className="absolute inset-0 rounded-3xl border-2 border-white/40 backdrop-blur-md rotate-6 scale-95"
        style={{
          boxShadow: "0 0 15px rgba(255,255,255,.6),0 0 25px #a855f7,0 0 45px #6366f1",
        }}
      />

      {/* Profile Image Wrap */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl transition-transform duration-300">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* Badge Text Title */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-[85%] rounded-xl bg-purple-900/90 backdrop-blur-md py-3 text-center">
        <h2 className="text-white font-bold tracking-widest text-xs sm:text-sm lg:text-base">
          MERN STACK DEVELOPER
        </h2>
      </div>
    </motion.div>
  );
};

export default ImageContainer;
