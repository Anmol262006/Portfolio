import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LeftContentSection = () => {
  const type = ["Experiences", "Innovation", "Skills"];
  const [value, setValue] = useState("Experiences");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % type.length;
      setValue(type[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for global content elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="text-center lg:text-left font-[Yuyu]">
      
      {/* 1. Animated Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-1 rounded-full border border-black lg:mt-2 mt-10 hover:bg-green-200 backdrop-blur-md px-4 py-2 text-xs sm:text-sm cursor-default"
      >
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        AVAILABLE FOR OPPORTUNITIES
      </motion.div>

      {/* 2. Main Heading Block */}
      <motion.h1 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="mt-6 font-bold leading-tighter text-4xl sm:text-5xl lg:text-7xl text-black"
      >
        <motion.span variants={fadeInUp} className="inline-block">I build digital</motion.span>
        <br />

        {/* Dynamic Text Switching Container */}
        <span className="relative mt-3 inline-flex items-center h-[52px] sm:h-[72px] lg:h-[84px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{  opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-2xl bg-purple-900 text-white px-4 py-2 text-2xl sm:text-4xl lg:text-5xl font-bold"
            >
              {value}
            </motion.div>
          </AnimatePresence>
        </span>
        <br />

        <motion.span variants={fadeInUp} className="inline-block">that matter.</motion.span>
      </motion.h1>

      {/* 3. Description (Updated for scroll in/out compatibility) */}
      <div className="overflow-hidden">
        <motion.p  
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-xl mx-auto lg:mx-0 text-black font-bold text-sm sm:text-base leading-7"
        >
          I'm a passionate Full Stack Developer who loves building scalable web
          applications with modern technologies.
        </motion.p>
      </div>

      {/* 4. Animated Call-to-Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
      >
        <motion.a 
          href="https://github.com/Anmol262006/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 text-white font-semibold shadow-md shadow-violet-600/20 transition-all"
        >
          View My Work
        </motion.a>

        <motion.a 
           href="/resume.pdf" 
           target="_blank"
          whileHover={{ scale: 1.05, backgroundColor: "#000000", color: "#ffffff" }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto rounded-xl border border-black px-8 py-4 font-semibold text-black transition-colors duration-300"
        >
          Download Resume
        </motion.a>
      </motion.div>

    </div>
  );
};

export default LeftContentSection;
