/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import { useInView } from "react-cool-inview";
import { Link } from "react-scroll";
// import { Typewriter } from "react-simple-typewriter";

const homeVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: 20, opacity: 0 },
};

const nameVariantsm = {
  visible: { x: 0, y: -170, transition: { delay: 5, duration: 2 } },
  initial: { x: 0, y: 0 },
};

const nameVariantmb = {
  visible: { x: -580, y: -100, transition: { delay: 5, duration: 2 } },
  initial: { x: 0, y: 0 },
};

const infoVariant = {
  visible: {
    x: 75,
    y: 250,
    transitionEnd: { opacity: 1 },
    transition: { delay: 5, duration: 2 },
  },
  initial: { x: 0, y: 0, opacity: 0 },
};

const infoVariantsm = {
  visible: {
    x: 40,
    y: 200,
    transitionEnd: { opacity: 1 },
    transition: { delay: 5, duration: 2 },
  },
  initial: { x: 0, y: 0, opacity: 0 },
};

const buttonVariants = {
  visible: {
    x: 75,
    y: 260,
    // transitionEnd: { opacity: 1 },
    transition: { delay: 15, duration: 2, type: "tween" },
  },
  initial: { x: -500, y: 260 },
};

const buttonVariantsm = {
  visible: {
    x: 40,
    y: 265,
    transitionEnd: { display: "flex" },
    transition: { delay: 10, duration: 4 },
  },
  initial: { x: 2000, y: 0, display: "none" },
};

const Home2 = ({ enter, leave }) => {
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
      // console.log("visible");
    } else {
      control.start("initial");
      // console.log("hidden");
    }
  }, [control, inView]);
  // const handleDone = () => {
  //   alert(`Done after 5 loops!`);
  // };

  return (
    <motion.div
      variants={homeVariant}
      initial="hidden"
      animate={control}
      ref={observe}
      className="w-full h-screen grid grid-cols-12 divide-yellow-200 bg-red-400/10"
    >
      <div className="col-span-1 grid grid-rows-12 h-screen">
        <div className="row-span-3">
          <div className="line-in-middle h-full w-full"></div>
        </div>
        <div className="row-span-9 flex justify-center items-center">
          <p className="writing-mode-vertical font-Dosis">Scroll Down</p>
        </div>
        <div>
          <div className="line-in-middle h-full w-full"></div>
        </div>
      </div>
      <div className="col-span-10 w-full">
        <div className="con flex justify-center items-center relative h-full">
          <div className="box">
            {/* //medium devices and above */}
            <span className="hidden md:block">
              <motion.div
                onMouseEnter={enter}
                onMouseLeave={leave}
                variants={nameVariantmb}
                initial="initial"
                animate={control}
                className="title w-full relative"
              >
                <span className="shade"></span>
                <h1 className="text-9xl">
                  Brian Njoroge<span></span>
                </h1>
              </motion.div>

              <motion.div
                variants={nameVariantmb}
                initial="initial"
                animate={control}
                className="role w-full relative flex h-[30px] mt-[-10px]"
              >
                <div className="shade"></div>
                <motion.p
                  initial={{ display: "flex" }}
                  animate={{ display: "none" }}
                  transition={{ delay: 8, duration: 25 }}
                >
                  FullStack Developer
                </motion.p>
                <p>
                  <TypeWriterEffect
                    startDelay={9500}
                    hideCursorAfterText={true}
                    cursorColor="gray"
                    multiText={[
                      "Frontend developer",
                      "backend developer",
                      "FullStack developer",
                      // "Learn CPR and the Heimlich Maneuver"
                    ]}
                    multiTextDelay={2000}
                    typeSpeed={100}
                  />
                </p>
              </motion.div>
            </span>
            {/* //small devices */}
            <span className="md:hidden">
              <motion.div
                variants={nameVariantsm}
                initial="initial"
                animate={control}
                className="title w-full relative"
              >
                <span className="shade"></span>
                <h1 className="text-9xl">
                  Brian Njoroge<span></span>
                </h1>
              </motion.div>

              <motion.div
                variants={nameVariantsm}
                initial="initial"
                animate={control}
                className="role w-full relative flex h-[30px] mt-[-10px]"
              >
                <div className="shade"></div>
                <p>FullStack Developer</p>
              </motion.div>
            </span>
          </div>
          <div className="absolute w-full h-full">
            <motion.p
              onMouseEnter={enter}
              onMouseLeave={leave}
              variants={infoVariant}
              initial="initial"
              animate={control}
              className="font-Dosis font-semibold w-3/4 hidden md:block mt-[12rem] ml-[6.8rem]"
            >
              <span>
                <TypeWriterEffect
                  startDelay={7500}
                  hideCursorAfterText={true}
                  cursorColor="gray"
                  multiText={[
                    "Lorem ipsum dolor sit, amet c...",
                    `Hey, I'm Brian Njoroge, a fullstack developer based in Nairobi with a passion of making things for the web, more so the ones that positively impact our society. Solving problems through code is one thing I enjoy doing, I have worked with the technologies below to create some projects.`,
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={50}
                />
              </span>
            </motion.p>

            {/* small devices */}
            <motion.p
              variants={infoVariantsm}
              initial="initial"
              animate={control}
              className="font-Dosis font-semibold w-4/5 mt-12 mx-[-0.5rem] md:hidden"
            >
              <span>
                <TypeWriterEffect
                  startDelay={10000}
                  hideCursorAfterText={true}
                  cursorColor="gray"
                  multiText={[
                    "Lorem ipsum dolor sit, amet c...",
                    `I have a passion for software engineering, and I enjoy developing and creating interactive websites. I love seeing how technology can improve the quality of life for people all over the world.`,
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={50}
                />
              </span>
            </motion.p>

            <motion.span
              variants={buttonVariants}
              initial="initial"
              animate={control}
              className="gap-3 font-Dosis hidden md:flex  ml-[6.8rem] mt-5"
            >
              {/* <a
                href="https://docs.google.com/document/d/16h8tFuzuY4_5zN2tmCAqVA3VL48QZZX7Nkmk96LteqY/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-outline">Resume</button>
              </a> */}

              <Link to="contact" smooth={true} offset={-45} duration={500}>
                <button className="btn btn-outline">Contact</button>
              </Link>
            </motion.span>

            <motion.span
              variants={buttonVariantsm}
              initial="initial"
              animate={control}
              className="gap-3 font-Dosis"
            >
              {/* <button className="btn btn-outline md:hidden">Resume</button> */}
              <Link to="contact" smooth={true} offset={-50} duration={500}>
                <button className="btn btn-outline md:hidden">Contact</button>
              </Link>
            </motion.span>
          </div>
        </div>
      </div>

      <div className="col-span-1  h-screen"></div>
    </motion.div>
  );
};

export default Home2;
