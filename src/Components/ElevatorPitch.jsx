import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-cool-inview";

const ElevatorPitch = () => {
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
      name="elevator-pitch"
      className="relative flex flex-wrap lg:h-screen lg:items-center bg-red-400/10"
    >
      <p className="font-Londrina text-5xl text-center w-full">
        {" "}
        Elevator Pitch
      </p>

      <div className="w-full mb-24">
        <div className="flex justify-center items-center flex-col">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sX2zBMwe-uU"
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
              href="https://www.youtube.com/embed/sX2zBMwe-uU"
            >
              Click to view
            </a>
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ElevatorPitch;
