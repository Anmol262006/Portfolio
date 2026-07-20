import React from "react";
import { lazy, Suspense } from "react";
import LeftContentSection from "../components/layout/LeftContentSection";
import HeroSkeleton from "../components/ui/ImageSkeleton";
import {motion} from "framer-motion"

const ImageContainer = lazy(
  () => import("../components/layout/ImageContainer"),
);

const HeroSection = () => {
  return (
    <section
      
     className="flex lg:flex-row flex-col-reverse justify-between lg:top-10 top-[100px] relative h-fit lg:px-20 px-7">
      {/* LEFT SIDE */}

      <div>
        <LeftContentSection />
      </div>

      {/* RIGHT SIDE */}

      <div className="flex justify-center">
        <Suspense fallback={<HeroSkeleton />}>
          <ImageContainer />
        </Suspense>
      </div>
    </section>
  );
};

export default HeroSection;
