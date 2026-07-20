import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";
import ContentCard from "../components/ui/ContentCard.jsx";

const educationData = [
  {
    type: "Graduation",
    institution: "Minerva College of Education, Indora",
    duration: "2023 - 2026",
    score: "7.97 CGPA",
    icon: <FaUniversity className="text-2xl text-purple-600" />,
    color: "#8b5cf6", // Violet-500
  },
  {
    type: "Higher Secondary (12th)",
    institution: "G.S.S.S Kakira",
    duration: "2021 - 2023",
    score: "80.4%",
    icon: <FaGraduationCap className="text-2xl text-purple-600" />,
    color: "#a855f7", // Purple-500
  },
  {
    type: "Matriculation (10th)",
    institution: "Sai Public High School, Nainikhad",
    duration: "2019 - 2021",
    score: "96.5%",
    icon: <FaSchool className="text-2xl text-purple-600" />,
    color: "#c084fc", // Purple-400
  },
];

const EducationSection = () => {
  // Container orchestrates the staggered cascade of timeline items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Timeline node animation properties (slides up and fades in/out)
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  return (
    <section className="min-h-screen text-zinc-950 py-16 font-[Yuyu] max-w-7xl mx-auto overflow-x-hidden">
    
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="px-4 lg:px-7 mb-16"
      >
        <ContentCard
          capsuleData="Journey"
          description="My academic roadmap reflecting foundational milestones and ongoing technical education."
          firstTwoWords="Education that"
          secondLinefirstWord="Shapes"
          highlight="My Perspective"
        />
      </motion.div>

   
      <div className="relative px-4 lg:px-7 max-w-4xl mx-auto">
        
    
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-purple-600 hidden sm:block transform -translate-x-1/2" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-30px" }}
          className="space-y-12 relative"
        >
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col sm:flex-row items-start sm:items-center relative w-full ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
               
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 bg-purple-50 border-4 border-purple-200 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-sm hidden sm:flex">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: edu.color }} />
                </div>

               
                <div className="w-full sm:w-1/2 hidden sm:block" />

                
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`w-full sm:w-[calc(50%-2rem)] bg-white border-2 border-purple-100 p-6 md:p-8 rounded-[2rem] shadow-sm transition-all duration-300 relative group`}
                  style={{
                    boxShadow: `0 10px 30px -15px rgba(147, 51, 234, 0.05)`,
                  }}
                >
                
                  <div
                    className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-[50px] pointer-events-none transition-opacity duration-700 opacity-10 select-none group-hover:opacity-20"
                    style={{ backgroundColor: edu.color }}
                  />

                  
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
                      style={{
                        backgroundColor: `${edu.color}10`,
                        border: `1px solid ${edu.color}20`,
                      }}
                    >
                      {edu.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider uppercase text-purple-600 block mb-0.5">
                        {edu.type}
                      </span>
                      <h3 className="text-lg font-black text-zinc-900 leading-tight">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>

                  {/* Detail Metrics Subtext Row Layout */}
                  <div className="flex items-center justify-between border-t border-purple-50 pt-4 mt-4">
                    <span className="text-sm font-medium text-zinc-500">
                      {edu.duration}
                    </span>
                    <span 
                      className="px-3.5 py-1.5 rounded-full text-sm font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: edu.color }}
                    >
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(EducationSection);
