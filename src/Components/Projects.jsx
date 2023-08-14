/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import sanityClient from "../client";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-cool-inview";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const projectsVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: 50, opacity: 0 },
};

const Projects = ({ enter, leave }) => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="Projects"] {
        _id,
        projectName,
        projectDesc,
        githubLink,
        liveLink,
        projectMockup {
          asset->{
            _id,
            url
          },
        },
        techStack,
        projectLinks->{
          liveLink,
          githubLink,
        }
      }`
      )
      .then((data) => setWorks(data))
      .catch(console.error);
  }, []);



  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  const control = useAnimation();
  const { observe, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    // unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 100px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
      // console.log(inView, "visible");
    } else {
      control.start("hidden");
      // console.log("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={observe}
      variants={projectsVariant}
      initial="hidden"
      animate={control}
      className="h-screen w-screen flex justify-center items-center bg-red-400/10"
    >
      <div className="grid grid-cols-12 divide-x divide-slate-800">
        <div className="col-span-1 flex items-center justify-center">
          <h1
            onMouseEnter={enter}
            onMouseLeave={leave}
            className="writing-mode-vertical text-5xl md:text-8xl md:ml-0 md:mr-6  text-shadow-lg font-Londrina"
          >
            PROJECTS
          </h1>
        </div>
        <div className="col-span-10 mt-4 hidden md:block">
          <Splide
            options={{
              // Customize Splide options here
              perPage: 1,
              type: "loop",
              // Add any other options you need
            }}
          >
            {works &&
              works.map((project) => (
                <SplideSlide key={project._id} className="h-[34rem]">
                  <div key={project._id} className=" h-[34rem]">
                    <motion.div
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="grid grid-cols-12 divide-x divide-slate-800 "
                    >
                      <div className="col-span-6 mt-12 ml-4 md:mt-36">
                        <h1
                          onMouseEnter={enter}
                          onMouseLeave={leave}
                          className="text-3xl w-1 md:mt-8 md:text-6xl font-Londrina"
                        >
                          {project.projectName}
                        </h1>
                        <div className="text-sm flex space-x-2 text-cyan-400">
                          {project.techStack.map((item, id) => (
                            <p key={id}>{item}</p>
                          ))}
                        </div>

                        <p className="font-Dosis font-semibold">
                          {project.projectDesc}
                        </p>

                        <div className="flex gap-4 mt-5">
                          <a className="cursor-pointer" href={project.liveLink}>
                            <AiOutlineLink fontSize="1.8rem" />
                          </a>
                          <a href={project.githubLink}>
                            <AiOutlineGithub fontSize="1.8rem" />
                          </a>
                        </div>
                      </div>
                      <div className="col-span-6 flex items-center justify-center mt-12 ">
                        <h1 className="absolute">You found the Easter egg</h1>
                        <h1 className="absolute mt-12">code:5652</h1>
                        <motion.img
                          style={{
                            x: x,
                            y: y,
                            rotateX: rotateX,
                            rotateY: rotateY,
                            // cursor: "grab",
                          }}
                          drag
                          dragConstraints={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                          }}
                          dragElastic={0.6}
                          whileTap={{ cursor: "grabbing" }}
                          className="relative"
                          src={project.projectMockup.asset.url}
                          alt={project.projectName}
                          data-splide-lazy={project.projectMockup.asset.url}
                        />
                      </div>
                    </motion.div>
                  </div>
                </SplideSlide>
              ))}
          </Splide>
          {/* </Slider> */}
        </div>
        <div className="col-span-10   md:hidden overflow-scroll">
          {works &&
            works.map((project) => (
              <div key={project._id}>
                <div className="mt-2">
                  <h1 className="text-3xl md:mt-8 md:text-6xl font-Londrina ">
                    {project.projectName}
                  </h1>
                  <div className="text-sm flex space-x-2 text-emerald-600">
                    {project.techStack.map((item, id) => (
                      <p key={id}>{item}</p>
                    ))}
                  </div>

                  <p className="font-Dosis break-words">
                    {project.projectDesc}
                  </p>

                  <div className="flex gap-4 mt-2">
                    <a href={project.projectLinks.liveLink} target="_blank" rel="noreferrer">
                      <AiOutlineLink fontSize="1.5rem" />
                    </a>
                    <a href={project.projectLinks.githubLink} target="_blank" rel="noreferrer">
                      <AiOutlineGithub fontSize="1.5rem" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div></div>
    </motion.div>
  );
};

export default Projects;
