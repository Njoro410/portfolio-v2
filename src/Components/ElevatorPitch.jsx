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
      <p className="font-Londrina text-5xl text-center w-full"> Elevator Pitch</p>

      <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24"></div>

      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full"></div>
    </motion.section>
  );
};

export default ElevatorPitch;
