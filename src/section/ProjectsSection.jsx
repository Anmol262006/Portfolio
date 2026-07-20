import React from "react";
import ContentCard from "../components/ui/ContentCard";
import StatsCard from "../components/ui/StatsCard";
import { HiOutlineCode } from "react-icons/hi";
import { FaFolder,FaReact,FaNodeJs ,FaGithub,FaExternalLinkAlt } from "react-icons/fa";
import {SiExpress , SiMongodb , SiTailwindcss} from "react-icons/si"
import { GrDeploy } from "react-icons/gr";
import Portfolio from "../assets/profile/Portfol.webp"
import Ecommerce from "../assets/Ecommerce.webp"
import Grademeet from "../assets/Grade.webp"

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const projects = [
  {
    title: "Portfolio" ,
    image: Portfolio,
    tech: ["React", "Tailwind", "GSAP"],
    github: "#",
    demo: "#",
  },
  {
    title: "GradeMeet LMS",
    image: Grademeet,
    tech: ["React", "Express", "MongoDB", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce",
    image: Ecommerce,
    tech: ["Next.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
    {
    title: "Spotify",
    image: Ecommerce,
    tech: ["Next.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
];


const ProjectsSection = () => {
  return (
    <div className="font-[Yuyu]">
      <div className="flex flex-col lg:flex-row  justify-between px-7 py-4 gap-5">
        <ContentCard
          capsuleData={"Projects"}
          description={
            <>
              Here are some of my selected projects where i combined creativity
              and code <br /> to build impactful solutions
            </>
          }
          firstTwoWords={"Projects that"}
          secondLinefirstWord={"Solve"}
          highlight={"Real Problems"}
        />

        <StatsCard
          numberprojects={"12+"}
          technumbers={"8+"}
          techorSkills={"techs"}
          iconTech={<HiOutlineCode className="text-6xl text-violet-900" />}
          iconProjects={<FaFolder className="text-6xl text-violet-900" />}
          deployed={<GrDeploy className="text-6xl text-violet-900" />}
          deployedCount={"2"}
        />
      </div>
      <div className="w-full border-t-2 border-b-2 bg-violet-300 border-black" >


<h1 className="font-extrabold px-8 text-6xl mt-6 mb-6">Projects that i <span className="text-violet-900">Have Developed</span></h1>

</div>
  
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={2}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop
  breakpoints={{
    // When window width is >= 320px (Mobile)
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is >= 640px (Tablets / Small screens)
    640: {
      slidesPerView: 1.5, // Optional: reveals a peek of the next card
      spaceBetween: 20,
    },
    // When window width is >= 1024px (Desktop)
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  }}
>
  <div className="flex gap-10 py-10">
  {projects.map((project, index) => (
    <SwiperSlide key={index}>
      <div className="mx-auto rounded-3xl border border-zinc-200 bg-white/20 p-6 shadow-xl">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[420px] rounded-2xl object-cover"
        />

        <h2 className="mt-6 text-3xl font-bold">
          {project.title}
        </h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6 font-extrabold justify-around">
          <a
            href={project.demo}
            className="rounded-lg bg-violet-600 px-5 py-3 text-white"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="rounded-lg border border-violet-600 px-5 py-3 text-violet-600"
          >
            GitHub
          </a>
        </div>

      </div>
    </SwiperSlide>
  ))}
  </div>
</Swiper>

    </div>
  );
};

export default ProjectsSection;
