import React, { useState } from "react";
import { lazy, Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import HeroSkeleton from "../components/ui/Heroskeleton";
const HeroSection = lazy(() => import("../section/HeroSection"));
const SkillsSection = lazy(() => import("../section/SkillsSection"));
const ProjectsSection = lazy(() => import("../section/ProjectsSection"))
const AboutSection = lazy(() => import("../section/AboutSection"))
const EducationSection = lazy(() => import("../section/EducationSection"))
const ContactSection = lazy(() => import("../section/ContactMeSection"))
const Footer = lazy(() => import("../section/Footer"))

const portfolio = () => {
  const [nav, setNav] = useState("Home");

  return (
    <div>
      <div className="relative min-h-screen overflow-hidden bg-[#fff] select-none">
        <div
          className="absolute right-[100px] top-[10px] h-[550px] w-[550px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, violet 0%, rgba(124,20,237,0.6) 35%, transparent 65%)",
          }}
        />

        <Navbar nav={nav} setNav={setNav} />

        {/* Content */}
        <main className="relative z-10 lg:max-w-7xl min-h-screen lg:px-18 lg:py-10 py-7 mt-10">
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>

          <hr className="relative z-50 text-black bg-black   mt-30 mb-5 w-full" />

          <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading Skills...
              </div>
            }
          >
            <SkillsSection />
          </Suspense>

           <hr className="relative z-50 text-black bg-black  mt-6 mb-5 w-full" />

            <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading Projects...
              </div>
            }
          >
            <ProjectsSection />
          </Suspense>



                  <hr className="relative z-50 text-black bg-black  mt-6 mb-5 w-full" />

            <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading About...
              </div>
            }
          >
            <AboutSection />
          </Suspense>

            <hr className="relative z-50 text-black bg-black  mt-6 mb-5 w-full" />
   
     <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading About...
              </div>
            }
          >
            <EducationSection />
          </Suspense>



            <hr className="relative z-50 text-black bg-black  mt-6 mb-5 w-full" />

            <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading ContactSection...
              </div>
            }
          >
            <ContactSection />
          </Suspense>

   <hr className="relative z-50 text-black bg-black  mt-6 mb-5 w-full" />

  
     <Suspense
            fallback={
              <div className="text-black flex items-center justify-center h-screen w-screen">
                Loading Footer...
              </div>
            }
          >
            <Footer />
          </Suspense>
   



          
        </main>
      </div>
    </div>
  );
};

export default portfolio;
