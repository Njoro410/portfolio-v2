import React from "react";
import { FaAngular, FaPython, FaReact } from 'react-icons/fa'
import {SiDjango, SiFlask, SiJavascript} from 'react-icons/si'

const About = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="mockup-window border  h-screen  md:h-screen w-screen px-6 py-6 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-700/ rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90  border-gray-900/10">
        <div>
          <h1 className="line text-slate-900 text-7xl underline underline-offset-1 mx-12 text-center">
            about me
          </h1>
        </div>

        <div className="grid grid-cols-2">
          <div className="text-sky-200">
            <p className="text-xl mx-12 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              ducimus velit voluptatem quasi dolore ea, cumque temporibus!
              Consequuntur assumenda rem doloremque. Saepe veritatis aperiam
              voluptatem vel labore ipsum repellat. Temporibus.
            </p>
            <p className="text-xl mx-12 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              veritatis consequatur possimus, delectus unde illo dolorum,
              dolorem facilis quaerat praesentium ratione laborum quibusdam
              voluptatum dignissimos. Amet, odit. Nostrum, mollitia sequi.
            </p>
            <p className="text-xl mx-12 my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              quibusdam voluptas minus, blanditiis fugit beatae dolore nisi ex
              adipisci vel nesciunt molestiae porro necessitatibus dolorum,
              veniam voluptatum! Deleniti, id. Ex. 
            </p>
          </div>
          <div className="grid grid-cols-3 md:mr-12 mt-6">
            <div class="hexagon-wrapper w-4">
              <div class="hexagon  ">
                <i className='text-blue-900'><FaReact /></i>
              </div>
            </div>
            <div class="hexagon-wrapper w-4">
              <div class="hexagon w-4 ">
                <i className='text-red-500'><FaAngular /></i>
              </div>
            </div>
            <div class="hexagon-wrapper w-4">
              <div class="hexagon  ">
                <i className='text-green-900'><SiDjango /></i>
              </div>
            </div>
            <div class="hexagon-wrapper w-4">
              <div class="hexagon  ">
                <i className='text-red-900'><SiFlask /></i>
              </div>
            </div>
            <div class="hexagon-wrapper w-4">
              <div class="hexagon  ">
                <i className='text-red-900'><FaPython /></i>
              </div>
            </div>
            <div class="hexagon-wrapper w-4">
              <div class="hexagon  ">
                <i className='text-yellow-500'><SiJavascript /></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
