import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-cool-inview";

const Portfolio = () => {
  const control = useAnimation();
  const { observe, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    // unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 100px",
  });

  const contactVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 50, opacity: 0 },
  };

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
    <motion.section
      variants={contactVariants}
      initial="hidden"
      animate={control}
      ref={observe}
      name="portfolio"
      className="relative flex flex-wrap lg:h-screen lg:items-center bg-red-400/10"
    >
      <p className="font-Londrina text-5xl text-center w-full mt-12">
        Portfolio
      </p>
      <div className="w-full h-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl md:text-4xl font-extrabold text-center font-Dosis ">
            Team Video
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_Jx-5h1CMhY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen

            
          ></iframe>
          <p className="text-xl md:text-3xl font-extrabold text-center font-Dosis ">
            <a
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
              href="https://www.youtube.com/embed/_Jx-5h1CMhY"
            >
              Click to view
            </a>
          </p>
        </div>
      </div>

      <div className="w-full h-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="flex justify-center items-center flex-col ">
          <p className="text-2xl md:text-4xl font-extrabold text-center font-Dosis ">
            Team Slide Deck
          </p>
          <iframe
            title="Slide deck"
            src="https://drive.google.com/file/d/1uaPV7-dgE505GoLUIJu0A9pi34R3bd2R/preview"
            width="560"
            height="315"
          ></iframe>
          <p className="text-xl md:text-3xl font-extrabold text-center font-Dosis ">
            <a
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1uaPV7-dgE505GoLUIJu0A9pi34R3bd2R/view?usp=drive_link"
            >
              Click to view
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
