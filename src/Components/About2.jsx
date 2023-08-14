import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import Marquee from "react-fast-marquee";
import { useQuery } from "react-query";
import fetchCrypto from "./fetchCrypto";
import { DiJavascript1, DiPostgresql } from "react-icons/di";
import {
  SiBootstrap,
  SiDjango,
  SiFirebase,
  SiFlask,
  SiMui,
  SiTailwindcss,
} from "react-icons/si";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineConsoleSql,
  AiOutlineRise,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";
import {
  FaAngular,
  FaPhoneSquareAlt,
  FaPython,
  FaReact,
  FaStackOverflow,
} from "react-icons/fa";
import { GrSpotify } from "react-icons/gr";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-cool-inview";

//animation variants

const aboutVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { y: 50, opacity: 0 },
};

const aboutVariantsm = {
  visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  hidden: { y: 4, opacity: 0 },
};

const socialVariant1 = {
  visible: { x: 0, transition: { delay: 1, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant2 = {
  visible: { x: 0, transition: { delay: 1.5, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant3 = {
  visible: { x: 0, transition: { delay: 2, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant4 = {
  visible: { x: 0, transition: { delay: 2.5, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant5 = {
  visible: { x: 0, transition: { delay: 3, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant6 = {
  visible: { x: 0, transition: { delay: 3.5, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};
const socialVariant7 = {
  visible: { x: 0, transition: { delay: 4, type: "spring", stiffness: 100 } },
  hidden: { x: -250 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const hoverAnimation = {
  visible: { y: 0, opacity: 1, transition: { duration: 3 } },
  hidden: { y: 12, opacity: 0 },
  onHover: {
    scale: 1.1,
    transition: {
      duration: 0.8,
    },
  },
};

const About2 = ({ enter, leave }) => {
  const { data, error, isError, isLoading } = useQuery("crypto", fetchCrypto);

  if (isLoading) {
    // return <div>Loading...</div>;
    // console.log("loading");
  }
  if (isError) {
    // return <div>Error! {error.message}</div>;
    console.log(error.message);
  }
  // console.log(data)

  const [stack, myStack] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="Stack"] {
        _id,
        stackName,
        stackImage {
          asset -> {
            _id,
            url
          }
        }
      }`
      )
      .then((data) => myStack(data))
      .catch(console.error);
  }, []);

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
      variants={aboutVariant}
      initial="hidden"
      animate={control}
      name='bio'
      ref={observe}
      className="h-full w-full bg-red-400/10 overflow-x-hidden"
    >
      <div className="grid h-full grid-cols-12  md:grid md:grid-cols-12">
        <div className="col-span-1 flex justify-center items-center flex-col space-y-4 h-full ">
          <div className="line-in-middle h-[16rem] w-full"></div>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant1}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="LinkedIn"
          >
            <a href="https://www.linkedin.com/in/njorogebrian">
              <AiFillLinkedin fontSize="2rem" />
            </a>
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant2}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Twitter"
          >
            <AiOutlineTwitter fontSize="2rem" />
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant3}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Spotify-like playlist"
          >
            <a href="https://open.spotify.com/playlist/3vGXsYB2zqZColZ0BO5ba4?si=d861ac8d21234e4d">
              <GrSpotify fontSize="2rem" />
            </a>
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant4}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Facebook"
          >
            <a href="https://www.facebook.com/brian.nairb.5652/">
              <AiFillFacebook fontSize="2rem" />
            </a>
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant5}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Github"
          >
            <a href="https://github.com/Njoro410">
              <AiFillGithub fontSize="2rem" />
            </a>
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant6}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Mobile(+254-722-770-727)"
          >
            <a href="tel:+254722770727">
              <FaPhoneSquareAlt fontSize="2rem" />
            </a>
          </motion.section>
          <motion.section
            onMouseEnter={enter}
            onMouseLeave={leave}
            variants={socialVariant7}
            initial="hidden"
            animate={control}
            whileHover="onHover"
            className="tooltip tooltip-right"
            data-tip="Stack Overflow"
          >
            <a href="https://stackoverflow.com/users/17658453/njoroge-brian">
              <FaStackOverflow fontSize="2rem" />
            </a>
          </motion.section>
        </div>
        {/* Mobile Devices */}
        <div className="col-span-10 md:col-span-4 h-full">
          <motion.p
            variants={aboutVariantsm}
            initial="hidden"
            animate={control}
            className="font-Londrina text-5xl text-center"
          >
            {/* About Me */} Bio
          </motion.p>
          <section className="hidden  md:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="880.16014"
              height="576.27222"
              viewBox="0 0 880.16014 576.27222"
            >
              <motion.circle
                initial={{ offsetdistance: "0%", scale: 2.5 }}
                animate={{ offsetdistance: "100%", scale: 1 }}
                transition={{ duration: 4, yoyo: Infinity }}
                cx="435.55494"
                cy="71.26613"
                r="26.70075"
                fill="#cc9933"
              />
              <motion.path
                initial={{ x: -250, y: -140 }}
                animate={{
                  x: -100,
                  // y: -250,
                }}
                transition={{ duration: 4, yoyo: Infinity }}
                d="M655.233,220.48677a13.2351,13.2351,0,0,0-11.17-9.29,1.08068,1.08068,0,0,0-.18,0,1.41827,1.41827,0,0,0-.22-.05c-8.94-1.16-18.88,1.66-25.57,7.8a23.95824,23.95824,0,0,0-5.83,8.04,12.917,12.917,0,0,0-10.83-5.28,13.1835,13.1835,0,0,0-11.8,9.51,1.52646,1.52646,0,0,0,.69,1.69,6.673,6.673,0,0,0,2.79,1.42c2.21.47,4.44.9,6.67,1.29q6.54,1.14,13.15,1.85,4.365.465,8.75.74c6.04.38,12.11.47,18.16.28,3-.1,5.88-.2,8.62-1.52a12.79759,12.79759,0,0,0,4.95-4.31A14.54772,14.54772,0,0,0,655.233,220.48677Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#e6e6e6"
              />
              <motion.path
                initial={{ x: -70, y: -150 }}
                animate={{
                  x: -190,
                  // y: -250.86389,
                }}
                transition={{ duration: 4, yoyo: Infinity }}
                d="M600.30305,259.38679a13.65247,13.65247,0,0,0-.56-3.3,13.26025,13.26025,0,0,0-11.18-9.29.9647.9647,0,0,0-.17,0,1.88726,1.88726,0,0,0-.23-.05,33.19377,33.19377,0,0,0-14.69,1.51c-7.26,2.43-13.63,7.32995-16.7,14.33a12.9223,12.9223,0,0,0-10.84-5.28,13.18342,13.18342,0,0,0-11.8,9.51,1.55528,1.55528,0,0,0,.69,1.69,6.73289,6.73289,0,0,0,2.79,1.42c2.22.47,4.44.9,6.68,1.29q6.54,1.14,13.14,1.85a195.164,195.164,0,0,0,26.92,1.01995c2.99-.1,5.88-.2,8.62-1.51995a12.76973,12.76973,0,0,0,4.94-4.31A14.26452,14.26452,0,0,0,600.30305,259.38679Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#e6e6e6"
              />
              {/* leaf */}
              <path
                d="M948.05243,583.37544a171.85535,171.85535,0,0,1-7.4426,53.77281c-.18624.63255-.40951,1.26511-.63278,1.89789H830.422a98.32226,98.32226,0,0,1,7.40558-22.32779c9.117-19.35079,24.00219-35.91062,38.70137-52.35869,20.24387-22.66281,40.004-45.13937,43.13-74.612a169.25824,169.25824,0,0,1,19.053,39.33415,46.23132,46.23132,0,0,0-15.29449,9.37752c-1.22809,1.15359-2.53068,2.82822-1.89789,4.42835.5953,1.33961,2.23268,1.78638,3.684,2.08392,3.498.66981,6.99606,1.33961,10.49409,1.9724,2.75373.558,5.5447,1.07909,8.33568,1.60013A182.72887,182.72887,0,0,1,948.05243,583.37544Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#cc9933"
              />
              {/* leaf */}
              <path
                d="M1040.08007,571.31847c-17.56465,10.6801-28.72854,27.20268-37.84554,45.69742a46.7431,46.7431,0,0,0-21.2487,11.1639c-1.26534,1.15382-2.5677,2.82822-1.8979,4.42835.55829,1.33984,2.23292,1.78638,3.684,2.08392,3.46078.67,6.99606,1.33984,10.45684,1.9724-.33479.78155-.6698,1.60013-1.00459,2.38168H876.11967A164.17446,164.17446,0,0,1,893.57257,619.1c1.37686-1.37709,2.791-2.67945,4.24233-4.01907a173.65293,173.65293,0,0,1,50.23753-31.70553A176.73359,176.73359,0,0,1,1040.08007,571.31847Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f2f2f2"
              />
              <path
                d="M895.47047,639.04614H792.09268a167.93161,167.93161,0,0,1,.149-24.85824c4.13059-51.09359,31.92858-99.768,73.86769-129.24085-5.35868,19.09027-2.605,38.069,2.977,57.12206-.78133.26052-1.56288.48379-2.26994.78133a46.23567,46.23567,0,0,0-15.29448,9.37775c-1.22809,1.15359-2.53046,2.82822-1.8979,4.42835.55806,1.33961,2.23269,1.78615,3.684,2.08392,3.498.6698,6.99606,1.33961,10.45684,1.9724,2.791.558,5.582,1.07909,8.37292,1.63738,1.30237.22326,2.605.48356,3.90732.74407.186.44654.29777.85606.48379,1.26535,6.54952,18.0482,13.69435,36.24541,17.04361,54.74038a127.77792,127.77792,0,0,1,1.71188,14.02914C895.396,635.10158,895.47047,637.07375,895.47047,639.04614Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#cc9933"
              />
              {/* leaf */}
              <path
                d="M332.05243,583.37544a171.85535,171.85535,0,0,1-7.4426,53.77281c-.18624.63255-.40951,1.26511-.63278,1.89789H214.422a98.32226,98.32226,0,0,1,7.40558-22.32779c9.117-19.35079,24.00219-35.91062,38.70137-52.35869,20.24387-22.66281,40.004-45.13937,43.13-74.612a169.25824,169.25824,0,0,1,19.053,39.33415,46.23132,46.23132,0,0,0-15.29449,9.37752c-1.22809,1.15359-2.53068,2.82822-1.89789,4.42835.5953,1.33961,2.23268,1.78638,3.684,2.08392,3.498.66981,6.99606,1.33961,10.49409,1.9724,2.75373.558,5.5447,1.07909,8.33568,1.60013A182.72887,182.72887,0,0,1,332.05243,583.37544Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f2f2f2"
              />
              <path
                d="M424.08007,571.31847c-17.56465,10.6801-28.72854,27.20268-37.84554,45.69742a46.7431,46.7431,0,0,0-21.2487,11.1639c-1.26534,1.15382-2.5677,2.82822-1.8979,4.42835.55829,1.33984,2.23292,1.78638,3.68405,2.08392,3.46078.67,6.99606,1.33984,10.45684,1.9724-.33479.78155-.6698,1.60013-1.00459,2.38168H260.11967A164.17446,164.17446,0,0,1,277.57257,619.1c1.37686-1.37709,2.791-2.67945,4.24233-4.01907a173.65293,173.65293,0,0,1,50.23753-31.70553A176.73359,176.73359,0,0,1,424.08007,571.31847Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#cc9933"
              />
              {/* leaf */}
              <path
                d="M279.47047,639.04614H176.09268a167.93161,167.93161,0,0,1,.149-24.85824c4.13059-51.09359,31.92858-99.768,73.86769-129.24085-5.35868,19.09027-2.605,38.069,2.977,57.12206-.78133.26052-1.56288.48379-2.26994.78133a46.23567,46.23567,0,0,0-15.29448,9.37775c-1.22809,1.15359-2.53046,2.82822-1.8979,4.42835.55806,1.33961,2.23269,1.78615,3.684,2.08392,3.498.6698,6.99606,1.33961,10.45684,1.9724,2.791.558,5.582,1.07909,8.37292,1.63738,1.30237.22326,2.605.48356,3.90732.74407.186.44654.29777.85606.48379,1.26535,6.54952,18.0482,13.69435,36.24541,17.04361,54.74038a127.77792,127.77792,0,0,1,1.71188,14.02914C279.396,635.10158,279.47047,637.07375,279.47047,639.04614Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#cc9933"
              />
              {/* column */}
              <path
                d="M664.3299,595.64392l92.37,8.2.99.09v-394.14q-.49494-.345-.99-.69a288.32258,288.32258,0,0,0-62.01-32.94l-4.72,65.1-.43,5.96-4.67,64.56-1.44,19.86005-18.93,261.7Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#808080"
              />
              <path
                d="M435.89991,202.45392c-.66.42-1.32.84-1.98,1.28v400.2l1.98-.18,91.37-8.11-.17-2.3-18.93-261.7-1.44-19.86-4.67005-64.56-.43-5.96-4.95-68.27A287.68677,287.68677,0,0,0,435.89991,202.45392Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#808080"
              />
              <path
                d="M433.91993,203.73389c-1.33.86-2.66,1.74-3.97,2.63v403.03c0,10.07,5.97,18.51,13.95,20.66a15.24855,15.24855,0,0,0,4,.53h296.8a15.11793,15.11793,0,0,0,3.99-.53,17.06,17.06,0,0,0,7.78-4.66,22.9187,22.9187,0,0,0,6.18-16v-396.02c-1.64-1.21-3.29-2.41-4.96-3.58q-.49494-.345-.99-.69v400.29a16.10772,16.10772,0,0,1-.46,3.85c-1.41,5.95-6.06,10.31-11.54,10.31h-296.8c-6.62,0-12-6.35-12-14.16v-406.94C435.23987,202.8739,434.5799,203.29388,433.91993,203.73389Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#D3D3D3"
              />
              <rect
                x="273.00257"
                y="79.40401"
                width="326.75223"
                height="5.95901"
                fill="#e6e6e6"
              />
              <path
                d="M659.59992,165.2539c-1.98-.49-3.96-.95-5.96-1.38v161.81h5.96Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#e6e6e6"
              />
              <path
                d="M538.95991,161.86389c-1.99.37-3.98.75-5.96,1.16v162.66h5.96Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#e6e6e6"
              />
              <path
                d="M368.85993,620.15387a26.71127,26.71127,0,0,0,1.93,9.98,25.54045,25.54045,0,0,0,1.75,3.56,27.096,27.096,0,0,0,3.02,4.18,26.7604,26.7604,0,0,0,20.12,9.11h391.31a26.82,26.82,0,0,0,0-53.64h-391.31A26.84644,26.84644,0,0,0,368.85993,620.15387Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#e6e6e6"
              />
              {/* column */}
              <rect
                x="432.9225"
                y="311.78281"
                width="324.76589"
                height="19.86336"
                transform="translate(1030.69096 481.5651) rotate(-180)"
                fill="#e6e6e6"
              />
              <path
                d="M581.40109,305.82381h27.8087a0,0,0,0,1,0,0v0A10.92484,10.92484,0,0,1,598.285,316.74865h-5.959a10.92484,10.92484,0,0,1-10.92484-10.92484v0A0,0,0,0,1,581.40109,305.82381Z"
                transform="translate(1030.69096 460.70857) rotate(-180)"
                fill="#e6e6e6"
              />
              <path
                d="M159.91993,635.47388a289.004,289.004,0,0,0,28.12,28.95h806.58a289.004,289.004,0,0,0,28.12-28.95Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M556.60993,538.66388v102.56h71.85v-102.56a3.448,3.448,0,0,0-2.43-3.3,3.17457,3.17457,0,0,0-1.03-.16H560.0799A3.46327,3.46327,0,0,0,556.60993,538.66388Zm28.04,35.24a7.67034,7.67034,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M556.39,637.94391v9.89a1.94622,1.94622,0,0,0,1.93,1.94h68.43a1.93971,1.93971,0,0,0,1.93-1.94v-9.89Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M443.5799,384.14392v187.26a9.00714,9.00714,0,0,0,9,9h277.5a9.0071,9.0071,0,0,0,9-9V384.14392a9.01147,9.01147,0,0,0-9-8.99h-277.5A9.01151,9.01151,0,0,0,443.5799,384.14392Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M450.08991,386.47388v182.62a4.81834,4.81834,0,0,0,4.81,4.81h272.87a4.81829,4.81829,0,0,0,4.81-4.81v-182.62a4.82046,4.82046,0,0,0-4.81-4.82h-272.87A4.82051,4.82051,0,0,0,450.08991,386.47388Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f9a826"
              />
              <path
                d="M505.72993,652.10388a2.94839,2.94839,0,0,0,2.32,1.11H670.39a2.98724,2.98724,0,0,0,2.92-3.6l-2.52-11.97a2.99262,2.99262,0,0,0-1.86-2.17,2.89451,2.89451,0,0,0-1.06-.2h-157.31a2.89422,2.89422,0,0,0-1.06.2,2.99237,2.99237,0,0,0-1.86,2.17l-2.52,11.97A2.98494,2.98494,0,0,0,505.72993,652.10388Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="661.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1168.51393 1115.99546) rotate(-180)"
                fill="#cc9933"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="651.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1148.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="641.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1128.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(255, 0, 0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="631.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1108.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(255, 255, 0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="621.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1088.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0, 255, 0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="611.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1068.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0, 255, 255)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="601.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1048.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(128, 0, 128)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="591.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1028.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="581.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1008.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "#8F00FF", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="571.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(988.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="561.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(968.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="551.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(948.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["rgb(0,128,0)", "#fa0", "#0af"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="541.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(928.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "#fa0", "rgba(0,0,0,0)"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="531.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(908.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="521.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(888.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="511.71693"
                y="637.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(868.51393 1115.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["rgba(0,0,0,0)", "#0af", "#fff"] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="661.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1168.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="651.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1148.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#00FF00", "#fa0", "rgba(0,0,0,0)"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="641.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1128.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgba(0,0,0,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="631.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1108.75026 1125.99546) rotate(-180)"
                fill="#ff0000"
              />
              <motion.rect
                animate={{ fill: ["#00FF00", "#fa0", "rgba(0,0,0,0)"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="621.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1088.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["rgba(0,0,0,0)", "#0af", "#fff"] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="611.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1068.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="601.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1048.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="591.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1028.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="581.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(1008.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="571.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(988.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="561.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(968.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="551.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(948.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="541.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(928.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="531.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(908.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="521.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(888.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="511.83509"
                y="642.42968"
                width="5"
                height="3"
                rx="0.48819"
                transform="translate(868.75026 1125.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.rect
                animate={{ fill: ["#0af", "rgb(0,128,0)", "#fa0"] }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                x="578.83509"
                y="648.42968"
                width="40"
                height="3"
                rx="0.48819"
                transform="translate(1037.75026 1137.99546) rotate(-180)"
                fill="#3f3d56"
              />
              <motion.path
                d="M468.6118,406.8106H723.93516a1.01559,1.01559,0,0,0,0-2.03069H468.6118a1.01559,1.01559,0,0,0,0,2.03069Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <motion.ellipse
                transition={bounceTransition}
                animate={{
                  y: ["0.3%", "-0.3%"],
                }}
                cx="546.63504"
                cy="231.64882"
                rx="5.95043"
                ry="6.08304"
                fill="#3f3d56"
              />
              <motion.ellipse
                transition={bounceTransition}
                animate={{
                  y: ["0.3%", "-0.3%"],
                }}
                cx="526.07902"
                cy="231.64882"
                rx="5.95043"
                ry="6.08304"
                fill="#3f3d56"
              />
              <motion.ellipse
                transition={bounceTransition}
                animate={{
                  y: ["0.3%", "-0.3%"],
                }}
                cx="505.523"
                cy="231.64882"
                rx="5.95043"
                ry="6.08304"
                fill="#3f3d56"
              />
              <path
                d="M479.89991,390.04388a1.0948,1.0948,0,0,0,1.09,1.1h14.6a1.1053,1.1053,0,0,0,0-2.21h-14.6A1.1034,1.1034,0,0,0,479.89991,390.04388Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M479.89991,394.19391a1.09475,1.09475,0,0,0,1.09,1.1h14.6a1.10527,1.10527,0,0,0,0-2.21h-14.6A1.1034,1.1034,0,0,0,479.89991,394.19391Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M479.89991,398.33392a1.1034,1.1034,0,0,0,1.09,1.11h14.6a1.1053,1.1053,0,0,0,0-2.21h-14.6A1.09476,1.09476,0,0,0,479.89991,398.33392Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <motion.rect
                initial={{ x: -800, y: -600 }}
                animate={{ x: 316.36599, y: 268.5433 }}
                transition={{ duration: 4 }}
                // x="316.36599"
                // y="268.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 900, y: 800 }}
                animate={{ x: 376.36599, y: 268.5433 }}
                transition={{ duration: 4 }}
                // x="376.36599"
                // y="268.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -698, y: 786 }}
                animate={{ x: 393.36599, y: 268.5433 }}
                transition={{ duration: 4 }}
                // x="393.36599"
                // y="268.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: 700 }}
                animate={{ x: 332.68618, y: 268.06314 }}
                transition={{ duration: 4 }}
                // x="332.68618"
                // y="268.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 800, y: -500 }}
                animate={{ x: 412.68618, y: 268.06314 }}
                transition={{ duration: 4 }}
                // x="412.68618"
                // y="268.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 390, y: 290 }}
                animate={{ x: 332.36599, y: 281.5433 }}
                transition={{ duration: 4 }}
                // x="332.36599"
                // y="281.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 900, y: -700 }}
                animate={{ x: 392.36599, y: 281.5433 }}
                transition={{ duration: 4 }}
                // x="392.36599"
                // y="281.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 100, y: 900 }}
                animate={{ x: 409.36599, y: 281.5433 }}
                transition={{ duration: 4 }}
                // x="409.36599"
                // y="281.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 100, y: 900 }}
                animate={{ x: 348.68618, y: 281.06314 }}
                transition={{ duration: 4 }}
                // x="348.68618"
                // y="281.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -800, y: 100 }}
                animate={{ x: 428.68618, y: 281.06314 }}
                transition={{ duration: 4 }}
                // x="428.68618"
                // y="281.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 200, y: 800 }}
                animate={{ x: 348.36599, y: 294.5433 }}
                transition={{ duration: 4 }}
                // x="348.36599"
                // y="294.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -100, y: -900 }}
                animate={{ x: 408.36599, y: 294.5433 }}
                transition={{ duration: 4 }}
                // x="408.36599"
                // y="294.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -100, y: -900 }}
                animate={{ x: 425.36599, y: 294.5433 }}
                transition={{ duration: 4 }}
                // x="425.36599"
                // y="294.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 900, y: -900 }}
                animate={{ x: 364.68618, y: 294.06314 }}
                transition={{ duration: 4 }}
                // x="364.68618"
                // y="294.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 200, y: -900 }}
                animate={{ x: 444.68618, y: 294.06314 }}
                transition={{ duration: 4 }}
                // x="444.68618"
                // y="294.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -990, y: -800 }}
                animate={{ x: 364.36599, y: 307.5433 }}
                transition={{ duration: 4 }}
                // x="364.36599"
                // y="307.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: 400 }}
                animate={{ x: 424.36599, y: 307.5433 }}
                transition={{ duration: 4 }}
                // x="424.36599"
                // y="307.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: -1000 }}
                animate={{ x: 441.36599, y: 307.5433 }}
                transition={{ duration: 4 }}
                // x="441.36599"
                // y="307.5433"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: 500 }}
                animate={{ x: 380.68618, y: 307.06314 }}
                transition={{ duration: 4 }}
                // x="380.68618"
                // y="307.06314"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -100, y: 900 }}
                animate={{ x: 376.36599, y: 359.23682 }}
                transition={{ duration: 4 }}
                // x="376.36599"
                // y="359.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -870, y: 280 }}
                animate={{ x: 393.36599, y: 359.23682 }}
                transition={{ duration: 4 }}
                // x="393.36599"
                // y="359.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 860, y: -630 }}
                animate={{ x: 412.68618, y: 359.71699 }}
                transition={{ duration: 4 }}
                // x="412.68618"
                // y="359.71699"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 690, y: -900 }}
                animate={{ x: 316.36599, y: 359.23682 }}
                transition={{ duration: 4 }}
                // x="316.36599"
                // y="359.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -690, y: 780 }}
                animate={{ x: 332.68618, y: 359.71699 }}
                transition={{ duration: 4 }}
                // x="332.68618"
                // y="359.71699"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -350, y: 750 }}
                animate={{ x: 332.36599, y: 346.23682 }}
                transition={{ duration: 4 }}
                // x="332.36599"
                // y="346.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: 900 }}
                animate={{ x: 392.36599, y: 346.23682 }}
                transition={{ duration: 4 }}
                // x="392.36599"
                // y="346.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 689, y: -748 }}
                animate={{ x: 409.36599, y: 346.23682 }}
                transition={{ duration: 4 }}
                // x="409.36599"
                // y="346.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 900, y: 478 }}
                animate={{ x: 348.68618, y: 346.71699 }}
                transition={{ duration: 4 }}
                // x="348.68618"
                // y="346.71699"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 400, y: -600 }}
                animate={{ x: 348.36599, y: 333.23682 }}
                transition={{ duration: 4 }}
                // x="348.36599"
                // y="333.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 800, y: -700 }}
                animate={{ x: 408.36599, y: 333.23682 }}
                transition={{ duration: 4 }}
                // x="408.36599"
                // y="333.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 990, y: -200 }}
                animate={{ x: 425.36599, y: 333.23682 }}
                transition={{ duration: 4 }}
                // x="425.36599"
                // y="333.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 800, y: -200 }}
                animate={{ x: 364.68618, y: 333.71699 }}
                transition={{ duration: 4 }}
                // x="364.68618"
                // y="333.71699"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -900, y: 800 }}
                animate={{ x: 364.36599, y: 320.23682 }}
                transition={{ duration: 4 }}
                // x="364.36599"
                // y="320.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -1000, y: 9000 }}
                animate={{ x: 424.36599, y: 320.23682 }}
                transition={{ duration: 4 }}
                // x="424.36599"
                // y="320.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: 800, y: 200 }}
                animate={{ x: 441.36599, y: 320.23682 }}
                transition={{ duration: 4 }}
                // x="441.36599"
                // y="320.23682"
                width="11.00609"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <motion.rect
                initial={{ x: -600, y: 400 }}
                animate={{ x: 380.68618, y: 320.71699 }}
                transition={{ duration: 4 }}
                // x="380.68618"
                // y="320.71699"
                width="38.3657"
                height="5.75992"
                rx="2.87996"
                fill="#e6e6e6"
              />
              <path
                d="M509.83187,707.8161c-.22.11005-.44.22-.66.32q-2.085,1.035-4.2,2.04-6.33,3.015-12.82,5.73a285.48273,285.48273,0,0,1-34.97,12.03c-2-12.47-3.94-41.88-5.8-63.51-.35-4.07-.7-7.86005-1.05-11.21a97.15525,97.15525,0,0,0-1.89-13.08,4.35915,4.35915,0,0,0-.39-.97c.19,1.73.39,6.89.58,14.05.1,3.35.19,7.14.29,11.21.47,20.82.96,49.15,1.45,65.28-1.39.34-2.79.68-4.19,1-.88.21-1.77.41-2.66.6-1.08.24-2.16.48-3.24.69995q-1.695.36009-3.39.69a290.07234,290.07234,0,0,1-56.06,5.44c-1.25,0-2.49-.01-3.74-.02-.38,0-.76-.01-1.15-.02-1.1-.02-2.24-.04-3.4-.07a288.5911,288.5911,0,0,1-65.84-9.49l.87-64.11.15-11.21.06-4.25a15.1823,15.1823,0,0,0-.88,4.25c-.35,2.73-.71,6.6-1.07,11.21-1.37,17.76-2.78,46.41-4.24,62.71-17.29-4.92-29.93-9.41-45.73-17.31-.61005-.3-1.23-.61-1.84-.92.11-.77.23-1.54.34-2.33,1.79-12.44-.32-28.63,1.66-42.15,1.51-10.43,3.07-20.45,4.64-28.95,1.9-10.23,3.82995-18.27,5.74-22.18,2.2-4.51,4.4-8.95,6.53-13.2q1.38006-2.745,2.71-5.39c.48-.95.96-1.89,1.43-2.81,2.14-4.19,4.16-8.06,6.01-11.49,1.3-2.41,2.5-4.59,3.6-6.5,1.29-2.25,2.43-4.11,3.37-5.52a55.3059,55.3059,0,0,1,29.28-22.21l.3-.08.29.12.32995.15,19.06-6.97,8.51-20.49,43.71-2.69,7.06,5.37,3.61,2.75,3.85,2.93,7.08,5.39,2.01.62,2.99.92,20.45,6.28.21-.09.3.08a55.16791,55.16791,0,0,1,27.36,19.5c.68.88,1.31,1.79,1.92,2.71,1.66,2.46,3.9,6.35,6.54,11.23,1.09,2.01,2.24,4.19,3.45,6.5.73,1.39,7.03,21.05,13.16,41.13,5.73,18.8,11.31,37.97,12.04,42.89.13.91.27,1.82995.4,2.74.83,5.69,1.65,11.42,2.44,17.01,1.17,8.29,2.31,16.29,3.4,23.44C509.81185,707.68616,509.82186,707.74616,509.83187,707.8161Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <polygon
                points="303.59 473.566 295.093 440.774 287.59 469.07 303.59 473.566"
                opacity="0.2"
              />
              <path
                d="M175.74923,635.04964a6.41621,6.41621,0,0,0,6.18311,4.331l26.49182-.68178a6.32847,6.32847,0,0,0,5.98085-4.657l3.74889-40.08722a9.794,9.794,0,0,0,4.23792.87079,9.66133,9.66133,0,0,0-.48489-19.31658,8.18393,8.18393,0,0,0-1.73618.18056,6.54767,6.54767,0,0,0-4.87405-2.103l-40.75052,1.05229a5.85418,5.85418,0,0,0-1.00519.1248,6.36455,6.36455,0,0,0-4.87318,8.26464Zm43.17346-43.81684,2.66763-9.55274a6.50638,6.50638,0,0,0,.02037-3.37458c.12944-.00034.24363-.06168.37306-.062a6.91049,6.91049,0,0,1,.32358,13.81714A6.50523,6.50523,0,0,1,218.92269,591.2328Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M173.541,574.76349c.86818,4.96412,10.62909,8.45388,22.36585,7.8473,10.79272-.49726,19.61746-4.287,21.23421-8.77851a6.025,6.025,0,0,0-1.84435-.24588l-40.75052,1.05229A5.85418,5.85418,0,0,0,173.541,574.76349Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M198.05786,613.02141a.49675.49675,0,0,0,.15092-.06642l5.75315-3.76566a.49923.49923,0,0,0,.00032-.83621l-5.97979-3.91667a.49972.49972,0,1,0-.54792.83585l5.34091,3.49818-5.114,3.34794a.49991.49991,0,0,0,.39637.903Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f9a826"
              />
              <path
                d="M188.97111,613.44045a.5.5,0,0,0,.12607-.91842l-5.30305-3.04034,5.1256-3.80723a.49963.49963,0,1,0-.596-.80208l-5.73863,4.26265a.49951.49951,0,0,0,.04918.83476l5.96526,3.41968A.49965.49965,0,0,0,188.97111,613.44045Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f9a826"
              />
              <path
                d="M197.48564,616.32142a.482.482,0,0,0,.137-.05785.49976.49976,0,0,0,.16751-.68714l-8.15548-13.40836a.50026.50026,0,0,0-.85441.52058L196.9357,616.097A.50033.50033,0,0,0,197.48564,616.32142Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#f9a826"
              />
              <path
                d="M945.069,708.90387c-.61.31-1.23.62-1.84.92-15.8,7.9-28.44,12.39-45.73,17.31-1.46-16.3-2.87-44.95-4.24-62.71-.36-4.61-.72-8.48-1.07-11.21a15.18215,15.18215,0,0,0-.88-4.25l.06,4.25.15,11.21.87,64.11a288.5879,288.5879,0,0,1-65.84,9.49c-1.16.03-2.3.05-3.4.07-.39.01-.77.02-1.15.02-1.25.01-2.49.02-3.74.02a289.2711,289.2711,0,0,1-69.54-8.43c.49-16.13.98-44.46,1.44995-65.28.1-4.07.19-7.86.29-11.21.19-7.16.39-12.32.58-14.05a4.36163,4.36163,0,0,0-.39.97,97.15388,97.15388,0,0,0-1.89,13.08c-.35,3.35-.7,7.14-1.05,11.21-1.86,21.63-3.8,51.04-5.8,63.51a285.47262,285.47262,0,0,1-34.97-12.03q-9-3.75-17.68-8.09c1.1-7.2,2.25-15.27,3.43-23.64.92-6.49,1.87-13.16,2.84-19.75,1.5-10.18,52.46-120.11,64.47-123.96l.3-.08.21.09,20.45-6.28,2.99-.92,2.01-.62,7.08-5.39,3.85-2.93,3.61-2.75,7.06-5.37,43.71,2.69,8.51,20.49,19.06,6.97.33-.15.29-.12.3.08a55.306,55.306,0,0,1,29.28,22.21c.94,1.41,2.08,3.27,3.37,5.52,1.1,1.91,2.3,4.09,3.6,6.5,1.85,3.43005,3.87,7.30005,6.01,11.49.47.92.95,1.86,1.43,2.81q1.335,2.63993,2.71,5.38995c2.13,4.25,4.33,8.69,6.53,13.2,1.91,3.91,3.84,11.95,5.74,22.18,1.57,8.5,3.13,18.52,4.64,28.95,1.98,13.52-.13,29.71,1.66,42.15C944.83905,707.36389,944.95905,708.13391,945.069,708.90387Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <circle
                cx="656.95415"
                cy="296.15827"
                r="50.83645"
                fill="#ffb6b6"
              />
              <polygon
                points="575.659 473.566 584.156 440.774 591.659 469.07 575.659 473.566"
                opacity="0.2"
              />
              <path
                d="M961.689,614.0639c-3.04,41.88.11,60.32-16.67,94.85a286.15952,286.15952,0,0,1-47.52,18.22q-2.55.72-5.11,1.4a288.5879,288.5879,0,0,1-65.84,9.49c-1.16.03-2.3.05-3.4.07-.39.01-.77.02-1.15.02-1.25.01-2.49.02-3.74.02a289.2711,289.2711,0,0,1-69.54-8.43q-3.42-.84-6.81-1.77a285.47262,285.47262,0,0,1-34.97-12.03q-9-3.75-17.68-8.09c-1.31-.66-2.62-1.32-3.91-2-6.63-11.66-10.4-25.84-10.48-42.88C679.45905,633.57391,951.549,588.7439,961.689,614.0639Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M961.68115,621.23608c.15528-2.59271.32886-5.27093.53132-8.05987-10.14-25.32-282.23,19.51-286.82,48.87.01263,2.69184.12774,5.30414.32129,7.85456C686.82935,640.92248,945.31848,598.31445,961.68115,621.23608Z"
                transform="translate(-159.91993 -161.86389)"
                opacity="0.2"
              />
              {/* another hand */}
              <motion.path
                initial={{ x: -159.91993, y: -161.86389 }}
                animate={{ x: -159.91993, y: -169 }}
                transition={{ duration: 2, yoyo: Infinity }}
                d="M668.10237,616.03915,690.436,604.87234,671.8246,554.62155l-4.90493-25.342a19.16137,19.16137,0,0,0-31.2822-10.90731h0a19.16136,19.16136,0,0,0-2.4925,26.51833l18.20718,22.75891Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#ffb6b6"
              />
              <motion.path
                initial={{ x: -159.91993, y: -161.86389 }}
                animate={{ x: -159.91993, y: -169 }}
                transition={{ duration: 2, yoyo: Infinity }}
                d="M690.436,595.56664l-29.77821,14.889,22.59854,70.80908A30.97684,30.97684,0,0,0,705.592,701.98112h0a30.97683,30.97683,0,0,0,33.73744-14.197l59.92487-102.71393a31.62026,31.62026,0,0,0-10.19564-42.982h0a31.62045,31.62045,0,0,0-45.29614,12.76511l-36.576,77.93632Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <circle
                cx="209.50762"
                cy="287.55168"
                r="55.93503"
                fill="#a0616a"
              />
              <path
                d="M314.16422,410.86989C318.71215,404.74006,325.249,400.382,330.249,394.615c2.74344-3.16426,5.02141-6.74951,8.10566-9.58224,5.73039-5.26318,13.74425-7.4198,21.52026-7.688a54.30458,54.30458,0,0,1,44.33113,21.03844q6.09681-3.57471,12.19363-7.14926,2.40868,6.33969,4.81737,12.67953a7.39073,7.39073,0,0,1,11.26364,9.248c.96724-2.989,5.39916-3.62313,7.84251-1.64855,2.44335,1.97474,3.09761,5.488,2.69911,8.60414a17.31976,17.31976,0,0,1-13.06483,14.326c-5.30406,1.18167-11.47743-.05973-15.72259,3.33247-3.40352,2.71954-4.431,7.67163-7.9043,10.30126-4.28006,3.24035-10.3294,1.74177-15.64965,2.45781-9.30808,1.253-16.67837,10.773-15.55974,20.09824-.84211-2.94246-1.72714-5.97011-3.63853-8.36033-1.91154-2.39021-5.13083-4.00669-8.06243-3.12795-4.84583,1.45252-5.63858,8.05772-4.46415,12.97821,3.11475,13.05,14.91931,34.144,14.91931,34.144-15.32771,6.0462-33.58876.329-45.41517-11.144-11.82626-11.473-17.98564-27.71878-20.66871-43.97586C305.51637,437.361,305.83879,422.09124,314.16422,410.86989Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M880.58187,486.04614c10.6416-24.3981,4.61285-46.8497-8.36-58.76l0-.01c-5.1-11.43-11.88-20.25-19.64-22.32-3.75-2.41-7.39-5.24-11.43-6.68a14.88737,14.88737,0,0,0-11.68.53l-2.06-.55c-1.75-4.47-3.8-4.56-6.08-1.62-8.78-4.09-16.69-5.92-23.73-5.92-22.96,0-36.54,19.44-40.14,42.94l19.19,5.11,6.67-10.63-3.08,11.59,10.59,2.81c16.12,20.99-3.17,69.41-27.62,96.35q8.73-2.415,17.39-4.08l20.98-30.76-13,28c6.75-.99,15.36-.04,24.77,1.87,3.17-4.14,4.84-9.66,3.2-14.58a55.74547,55.74547,0,0,1,5.48,16.53c19.86,4.85,46.95,7.34,61.55,9.18C895.37777,541.1955,895.40987,497.70636,880.58187,486.04614Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M887.50523,403.05443c7.7946,17.45324-7.93319,24.96034-22.34136,24.74834-13.019-.19157-24.08365-9.33791-24.74832-22.34137a23.57558,23.57558,0,0,1,22.34136-24.74832C875.76037,380.04841,882.19575,391.16571,887.50523,403.05443Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              {/* first hand */}
              <motion.path
                initial={{ x: -159.91993, y: -161.86389 }}
                animate={{ x: -159.91993, y: -180 }}
                transition={{ duration: 2, yoyo: Infinity }}
                d="M525.90192,687.1729l-12.83956-21.41575L555.75351,633.369l17.75-18.74071a19.16138,19.16138,0,0,1,32.24488,7.60351h0a19.16136,19.16136,0,0,1-12.14227,23.70654l-27.5826,9.41646Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#a0616a"
              />
              <path
                d="M535.18185,686.46613l-19.99,16.66-5.39,4.49-.62994.52q-2.085,1.035-4.2,2.04-6.33,3.015-12.82,5.73a285.48273,285.48273,0,0,1-34.97,12.03q-3.38993.93-6.81,1.77c-1.39.34-2.79.68-4.19,1-.88.21-1.77.41-2.66.6-1.08.24-2.16.48-3.24.69995q-1.695.36009-3.39.69a30.96327,30.96327,0,0,1-9.62-22.44c0-.26995,0-.55.01-.82995l3.21-82.33,1.42005-36.49a31.618,31.618,0,0,1,31.69-30.78c.96,0,1.91.05,2.85.14.68.88,1.31,1.79,1.92,2.71,1.66,2.46,3.9,6.35,6.54,11.23,1.09,2.01,2.24,4.19,3.45,6.5.73,1.39,7.03,21.05,13.16,41.13l-2.7,20.97-4.88,37.80005,20.02-13.14,14.1-9.26,1.67,2.79,4.35,7.26,8.4,14Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#3f3d56"
              />
              <path
                d="M524.22188,662.93616c-.01,1.7-.05,3.37-.14,5.02a97.24839,97.24839,0,0,1-1.58,13.56,79.14449,79.14449,0,0,1-7.31,21.61c-.46.91-.95,1.81006-1.45,2.69-1.29.68006-2.6,1.34-3.91,2-.22.11005-.44.22-.66.32q-8.355,4.155-17.02,7.77a285.48273,285.48273,0,0,1-34.97,12.03q-3.38993.93-6.81,1.77-6.67493,1.65-13.48,2.99a290.07234,290.07234,0,0,1-56.06,5.44c-1.25,0-2.49-.01-3.74-.02-.38,0-.76-.01-1.15-.02-1.1-.02-2.24-.04-3.4-.07a288.5911,288.5911,0,0,1-65.84-9.49q-2.565-.675-5.11-1.4a286.16459,286.16459,0,0,1-47.52-18.22c-16.78-34.53-13.63-52.97-16.67-94.85,6.24-15.59,111.81-4.58,193.09,13.03,22.06,4.78,42.32,10.05,58.33,15.41,16.54,5.53,28.53,11.15,33.23,16.43006A7.9373,7.9373,0,0,1,524.22188,662.93616Z"
                transform="translate(-159.91993 -161.86389)"
                fill="#2f2e41"
              />
              <path
                d="M237.40778,621.23608c-.15527-2.59271-.32885-5.27093-.53131-8.05987,10.14-25.32,282.23,19.51,286.82,48.87-.01264,2.69184-.12775,5.30414-.32129,7.85456C512.25959,640.92248,253.77045,598.31445,237.40778,621.23608Z"
                transform="translate(-159.91993 -161.86389)"
                opacity="0.2"
              />
            </svg>
          </section>
          <motion.p
            variants={aboutVariantsm}
            initial="hidden"
            animate={control}
            className="font-Dosis px-4 py-4 text-justify text-sm font-bold  md:hidden"
          >
            Introducing Brian Njoroge, a skilled and dedicated fullstack
            developer who has carved his path in the world of technology. With a
            passion for innovation and a flair for creating seamless digital
            experiences, Brian's expertise shines through in every project he
            undertakes. As the driving force behind his own personal brand, he
            is committed to pushing boundaries and leaving a lasting impact.
            Brian's journey began with a deep-rooted fascination for coding and
            problem-solving. His current role as a fullstack developer allows
            him to bring his creative ideas to life by bridging the gap between
            front-end aesthetics and back-end functionality. But Brian's
            ambitions extend beyond the lines of code. He aspires to be a
            catalyst for positive change, leveraging technology to enhance
            everyday lives and foster growth within communities. Among Brian's
            standout achievements is the successful creation of a comprehensive
            management system for a Savings and Credit Cooperative Organization
            (SACCO). This achievement not only showcased his technical prowess
            but also highlighted his ability to understand complex
            organizational needs and translate them into user-friendly
            solutions. In the realm of artificial intelligence, Brian's
            innovation truly shines. He has harnessed the power of machine
            learning to develop an image classification model with the
            remarkable ability to identify crop diseases. This pioneering
            solution holds the potential to revolutionize agricultural
            practices, ensuring higher yields and sustainable farming practices.
            As Brian Njoroge continues to push the boundaries of technology and
            chart new territories, his unwavering dedication to his craft,
            coupled with his vision of a tech-driven future, sets him on an
            inspiring trajectory. With a track record of transformative
            achievements and an unyielding drive to make a difference, Brian's
            journey is one to watch, as he paves the way for a brighter tomorrow
            through innovation and ingenuity
          </motion.p>
          <motion.section
            variants={aboutVariantsm}
            initial="hidden"
            animate={control}
            className="m-4 font-Dosis grid grid-cols-2 md:hidden"
          >
            <div>
              <ol>
                <li className="p-1 flex items-center">
                  <DiJavascript1 />
                  •Javascript
                </li>
                <li className="p-1 flex items-center">
                  <FaReact />
                  •React
                </li>
                <li className="p-1 flex items-center">
                  <FaAngular />
                  •Angular
                </li>
              </ol>
            </div>
            <div>
              <ol start="4">
                <li className="p-1 flex items-center">
                  <FaPython />
                  •Python
                </li>
                <li className="p-1 flex items-center">
                  <SiDjango />
                  •Django
                </li>
                <li className="p-1 flex items-center">
                  <SiFlask />
                  •Flask
                </li>
              </ol>
            </div>
          </motion.section>
          <motion.section
            variants={aboutVariantsm}
            initial="hidden"
            animate={control}
            className="m-4 font-Dosis grid grid-cols-2 md:hidden"
          >
            <div>
              <ol>
                <li className="p-1 flex items-center">
                  <SiTailwindcss />
                  •TailwindCSS
                </li>
                <li className="p-1 flex items-center">
                  <SiBootstrap />
                  •Bootstrap
                </li>
                <li className="p-1 flex items-center">
                  <SiMui />
                  •Material
                </li>
              </ol>
            </div>
            <div>
              <ol>
                <li className="p-1 flex items-center">
                  <AiOutlineConsoleSql />
                  •SQL/NoSQL
                </li>
                <li className="p-1 flex items-center">
                  <DiPostgresql />
                  •PostgreSQL
                </li>
                <li className="p-1 flex items-center">
                  <SiFirebase />
                  •Firebase
                </li>
              </ol>
            </div>
          </motion.section>
        </div>
        <div className="text-white md:hidden"></div>
        <div className="hidden h-screen md:col-span-6 md:block">
          <div className="grid h-screen grid-rows-8 divide-y divide-slate-800">
            <div className="row-span-2 hidden md:flex flex-row gap-3 overflow-hidden w-full">
              <Marquee
                gradient={false}
                speed={50}
                direction="left"
                loop={0}
                pauseOnHover={true}
              >
                {data?.map((crypto, id) => (
                  <div key={id} className="mr-5 flex gap-">
                    <img
                      className="w-6 mr-2"
                      src={crypto.image}
                      alt={crypto.name}
                    />
                    <div
                      className="tooltip tooltip-bottom font-"
                      data-tip={crypto.name}
                    >
                      <p>USD:{crypto.current_price}</p>
                    </div>
                    {crypto.price_change_percentage_24h < 0 ? (
                      <AiOutlineFall color="red" />
                    ) : (
                      <AiOutlineRise color="green" />
                    )}
                  </div>
                ))}
              </Marquee>
            </div>
            {/* Medium Devices */}
            <div className="row-span-3 flex items-center justify-center font-Lato">
              {/* about md */}
              <motion.p
                onMouseEnter={enter}
                onMouseLeave={leave}
                variants={aboutVariant}
                initial="hidden"
                animate={control}
                className="font-Dosis px-4 py-4 text-xl text-justify  "
              >
                {/* Hey, first I'm glad you are here, I'm{" "}
                <span className="text-amber-500"> Brian Njoroge</span> and
                making things that thrive on the web is what I like doing. My
                interest in Software Development started in 2020 the year of the
                lockdown. I kept on exploring the web and realized that the
                universe might actually be smaller compared to it.
                <br /><br />
                Since then, I've been able to learn a thing or two, assisted
                other developers on{" "}
                <a className="text-white link link-hover" href="https://stackoverflow.com/users/17658453/njoroge-brian">
                  stack overflow
                </a>{" "}
                and on{" "}
                <a
                  href="https://www.codegrepper.com/profile/njoroge-brian"
                  className="text-white link link-hover "
                >
                  grepper
                </a>{" "}
                and judging from my 
                <a href="https://njoro410.github.io/Portfolio-landing-page/" className="text-white link link-hover ">
                   first portfolio
                </a>
                , we can agree that there's been improvement. I'm now looking
                for a junior software development role where I'll advance and
                learn new skills and also work with fellow developers.
                <br />
                Below are some of the technologies I've worked with. */}
                Introducing Brian Njoroge, a skilled and dedicated fullstack
                developer who has carved his path in the world of technology.
                With a passion for innovation and a flair for creating seamless
                digital experiences, Brian's expertise shines through in every
                project he undertakes. As the driving force behind his own
                personal brand, he is committed to pushing boundaries and
                leaving a lasting impact. Brian's journey began with a
                deep-rooted fascination for coding and problem-solving. His
                current role as a fullstack developer allows him to bring his
                creative ideas to life by bridging the gap between front-end
                aesthetics and back-end functionality. But Brian's ambitions
                extend beyond the lines of code. He aspires to be a catalyst for
                positive change, leveraging technology to enhance everyday lives
                and foster growth within communities. Among Brian's standout
                achievements is the successful creation of a comprehensive
                management system for a Savings and Credit Cooperative
                Organization (SACCO). This achievement not only showcased his
                technical prowess but also highlighted his ability to understand
                complex organizational needs and translate them into
                user-friendly solutions. In the realm of artificial
                intelligence, Brian's innovation truly shines. He has harnessed
                the power of machine learning to develop an image classification
                model with the remarkable ability to identify crop diseases.
                This pioneering solution holds the potential to revolutionize
                agricultural practices, ensuring higher yields and sustainable
                farming practices. As Brian Njoroge continues to push the
                boundaries of technology and chart new territories, his
                unwavering dedication to his craft, coupled with his vision of a
                tech-driven future, sets him on an inspiring trajectory. With a
                track record of transformative achievements and an unyielding
                drive to make a difference, Brian's journey is one to watch, as
                he paves the way for a brighter tomorrow through innovation and
                ingenuity
              </motion.p>
            </div>
            <div className="row-span-2 flex flex-row gap-3 overflow-hidden w-full">
              <Marquee
                gradient={false}
                speed={50}
                direction="left"
                loop={0}
                pauseOnHover={true}
                delay={5}
              >
                {stack &&
                  stack.map((stack) => (
                    <div key={stack._id}>
                      <motion.div
                        variants={hoverAnimation}
                        initial="hidden"
                        animate={control}
                        whileHover="onHover"
                        className="tooltip"
                        data-tip={stack.stackName}
                      >
                        <img
                          className="w-12 mx-5"
                          src={stack.stackImage.asset.url}
                          alt={stack.stackName}
                        />
                      </motion.div>
                    </div>
                  ))}
              </Marquee>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default About2;
