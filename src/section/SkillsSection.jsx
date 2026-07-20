import React from "react";
import { motion } from "framer-motion";
import { frontendSkills, backendSkills, basicKnowledge } from "../data/data.js";
import SkillCard from "../components/ui/SkillCard.jsx";
import Slider from "../components/ui/Slider.jsx";
import StatsCard from "../components/ui/StatsCard.jsx";
import ContentCard from "../components/ui/ContentCard.jsx";
import { HiOutlineCode } from "react-icons/hi";
import { FaFolder } from "react-icons/fa6";

const SkillsSection = () => {
  // Left side animation variant (slides from/to left off-screen)
  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.6 }
    }
  };

  // Right side animation variant (slides from/to right off-screen)
  const rightContentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.6 }
    }
  };

  return (
    <section className="min-h-screen text-zinc-950 py-12 font-[Yuyu] mt-7 max-w-7xl mx-auto overflow-x-hidden">
      {/* Upper Content and Stats Block Container */}
      <div className="flex lg:flex-row flex-col justify-between px-4 lg:px-7 gap-8 items-stretch">
        
        {/* Left Content Column */}
        <motion.div 
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }} // once: false ensures it animates out when you scroll away
          className="flex-1 flex"
        >
          <ContentCard 
            capsuleData={"Expertise"} 
            description={"I combine creativity with technical skills to build modern, performant, and scalable web applications."}
            firstTwoWords={"Skills that"}
            secondLinefirstWord={"Drive"}
            highlight={"My Work"}
          />
        </motion.div>

        {/* Right Content Column */}
        <motion.div 
          variants={rightContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2, margin: "-50px" }} // once: false ensures it animates out when you scroll away
          className="flex-1 flex justify-center lg:justify-end"
        >
          <StatsCard
            Title={"Full Stack Developer"}
            titleContent={"Building end-to-end solutions with modern technologies."}
            numberprojects={"2+"}
            technumbers={"12+"}
            techorSkills={"Skills"}
            icon={<HiOutlineCode className="text-4xl text-violet-700" />}
            iconTech={<HiOutlineCode className="text-4xl text-violet-700" />}
            iconProjects={<FaFolder className="text-4xl text-violet-700"/>}
          />
        </motion.div>
      </div>

      {/* Modern Low-Contrast Section Separator Line */}
      <div className="px-7 my-10">
        <hr className="border-zinc-200 w-full" />
      </div>

      {/* Grid Layout Container For Main Skills Cards */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 lg:px-7">
        <SkillCard
          skills={frontendSkills}
          cardTitle={"Frontend Skills"}
          color="#8b5cf6" // Violet-500
        />
        <SkillCard
          skills={backendSkills}
          cardTitle={"Backend Skills"}
          color="#0d9488" // Teal-600
        />
      </div>

      {/* Secondary Bottom Dynamic Carousel Slider Row */}
      <div className="mt-12">
        <Slider skills={basicKnowledge} heading={"Basic Knowledge"} />
      </div>
    </section>
  );
};

export default React.memo(SkillsSection);
