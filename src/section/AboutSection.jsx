import React , {forwardRef} from "react";
import About from "../assets/about.webp";
import ContentCard from "../components/ui/ContentCard";
import StatsCard from "../components/ui/StatsCard";
import { HiOutlineCode } from "react-icons/hi";
import { FaFolder, FaReact, FaNodeJs, FaNode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiFramer, SiVite, SiNextdotjs } from "react-icons/si";
import { GrDeploy } from "react-icons/gr";
import { IoIosMail , IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";

const AboutSection = forwardRef((props,ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Defining properties for revolving icons array
  const orbitIcons = [
    { Icon: FaReact, color: "text-cyan-400 border-cyan-400/30", delay: 0 },
    { Icon: SiNextdotjs, color: "text-black border-black/30 bg-white rounded-full p-1", delay: 4 },
    { Icon: SiVite, color: "text-yellow-400 border-yellow-400/30", delay: 8 },
    { Icon: SiExpress, color: "text-gray-500 border-gray-500/30 bg-white rounded-full p-1", delay: 12 },
    { Icon: FaNodeJs, color: "text-green-500 border-green-500/30", delay: 16 },
    { Icon: SiMongodb, color: "text-emerald-600 border-emerald-600/30", delay: 20 },
    { Icon: SiFramer, color: "text-pink-500 border-pink-500/30", delay: 24 },
  ];

  return (
    <section
      id="About"
      ref={ref}
     className="relative h-fit w-full overflow-hidden px-3 py-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="flex justify-between lg:flex-row flex-col-reverse gap-10 max-w-7xl mx-auto"
      >
        
        {/* Left Column */}
        <div className="relative z-10 flex flex-col border-[1px] border-gray-900 lg:px-10 px-5 py-5 rounded-2xl bg-white/50 backdrop-blur-sm w-full lg:w-3/5">
          <motion.div variants={itemVariants}>
            <ContentCard 
              capsuleData={"About Me"}
              description={
                <>
                  I am Anmol , a full stack developer who loves <br /> turning
                  ideas into real world digital-products.
                  <br /> I enjoy building clean , user friendly applications{" "}
                  <br /> that solve real world problems and create impact
                </>
              }
              firstTwoWords={<>Bring <span className="text-violet-900">Ideas</span></>}
              secondLinefirstWord={"Solving"}
              highlight={"Problems"}
            />
          </motion.div>

          <motion.hr variants={itemVariants} className="relative z-50 text-black bg-black mt-6 mb-7 w-full border-gray-300" />

          <motion.div variants={itemVariants}>
            <StatsCard
              numberprojects={"12+"}
              technumbers={"8+"}
              techorSkills={"techs"}
              iconTech={<HiOutlineCode className="lg:text-6xl text-5xl text-black" />}
              iconProjects={<FaFolder className="lg:text-6xl text-5xl text-black" />}
              deployed={<GrDeploy className="lg:text-6xl text-5xl text-black" />}
              deployedCount={"2"}
            />
          </motion.div>

          <motion.hr variants={itemVariants} className="relative z-50 text-black bg-black mt-6 mb-7 w-full border-gray-300" />

          <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.01 }}
            className="w-full border-2 border-violet-800 grid grid-cols-2 text-2xl sm:text-4xl rounded-2xl overflow-hidden shadow-md"
          >
            <div className="flex flex-col gap-2 px-4 py-4 font-[Yuyu]">
              <span className="px-2 py-1 text-black font-medium">Always Building</span>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.9 }}
                className="font-bold text-white bg-black px-4 py-1 rounded-2xl text-center shadow-sm"
              >
                Always Learning
              </motion.span>
            </div>  

            <div className="flex items-center justify-center bg-gray-900 relative overflow-hidden group cursor-pointer">
              <motion.div whileHover={{ scale: 1.15, rotate: 10 }} whileTap={{ scale: 0.95 }}>
                <GrDeploy className="text-white text-5xl sm:text-6xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image with Floating & Revolving Orbiting System */}
        <motion.div 
          variants={imageVariants}
          className="w-full lg:w-2/5 flex flex-col items-center gap-12 relative min-h-[450px] sm:min-h-[500px]"
        >
          {/* Main Orbit Ring Wrapper (Rotates clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 28 , ease:"anticipate" }}
            className="absolute w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-violet-900/30 flex items-center justify-center z-0"
          >
            {orbitIcons.map((item, index) => {
              // Mathematical placement along the radius perimeter
              const total = orbitIcons.length;
              const angle = (index / total) * 360;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(min(190px, 45vw)) rotate(-${angle}deg)`,
                  }}
                >
                  {/* Counter-rotation Container (Rotates counter-clockwise to keep icons upright) */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                    whileHover={{ scale: 1.2, zIndex: 50 }}
                    className={`flex items-center justify-center text-2xl sm:text-3xl p-2 sm:p-3 bg-white/80 backdrop-blur-md border rounded-xl shadow-lg cursor-pointer ${item.color}`}
                  >
                    <item.Icon />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Centred Floating Profile Illustration Wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="z-10 relative max-w-[210px] sm:max-w-[280px] mt-15"
          >
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.1 }}
              src={About} 
              alt="About Illustration" 
              className="w-full h-auto object-cover rounded-2xl shadow-xl border border-gray-900/10 lg:mt-0 mt-1"
            />
          </motion.div>

                <motion.div 
            whileHover={{ scale: 1.03 }}
            className="z-20 relative px-6 py-4 w-full max-w-[320px] sm:max-w-[360px] bg-purple-900 border border-purple-900/40 rounded-2xl flex flex-col gap-3 shadow-lg shadow-purple-900/20 lg:mt-24 mt-30"
          >
            <div className="flex gap-3 items-center text-white border-b border-white/10 pb-2">
              <IoIosMail className="text-purple-200" size={"20px"} />
              <span className="font-semibold text-xs tracking-wider opacity-60">EMAIL</span>
              <span className="text-white/40 mx-1">:</span>
              <a className="text-purple-100 hover:text-cyan-300 font-medium transition text-sm truncate" href="mailto:ak0052803@gmail.com">
                ak0052803@gmail.com
              </a>
            </div> 
            
            <div className="flex gap-3 items-center text-white">
              <IoIosCall className="text-purple-200" size={"20px"} />
              <span className="font-semibold text-xs tracking-wider opacity-60">PHONE</span>
              <span className="text-white/40 mx-1">:</span>
              <a className="text-purple-100 hover:text-cyan-300 font-medium transition text-sm" href="tel:+918091308651">
                +91 8091308651
              </a>
            </div>
          </motion.div>
         

        </motion.div>

      

       

      </motion.div>
    </section>
  );
});

export default AboutSection;
