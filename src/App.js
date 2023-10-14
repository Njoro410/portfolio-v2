/* eslint-disable jsx-a11y/anchor-is-valid */
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import { useEffect, useState } from 'react';
import About2 from './Components/About2';
import Contact from './Components/Contact';
import Home2 from './Components/Home2';
import Projects from './Components/Projects';
import { motion } from "framer-motion"
import Portfolio from './Components/Portfolio';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ElevatorPitch from './Components/ElevatorPitch';
import Navbar from './Components/Navbar';


function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default")


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      color: "red",
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=None;Secure=true";
  // alert( document.cookie );


  return (

    <div data-theme='luxury' >
      {/* <BrowserRouter> */}
      <motion.div variants={variants} animate={cursorVariant} className='cursor' />
      {/* <Navbar /> */}


      {/* <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            <FullpageSection> */}
      <Home2 enter={textEnter} leave={textLeave} />
      
      {/* </FullpageSection>
            <FullpageSection> */}
      <About2 enter={textEnter} leave={textLeave} />
      <Portfolio enter={textEnter} leave={textLeave}/>
      {/* <ElevatorPitch enter={textEnter} leave={textLeave}/>*/}
      {/* </FullpageSection>
            <FullpageSection> */}
      <Projects enter={textEnter} leave={textLeave} />
      {/* </FullpageSection>
            <FullpageSection> */}
      <Contact  />

      {/*    <ElevatorPitch /> */}

      {/* </FullpageSection>
          </FullPageSections>
        </Fullpage> */}

      {/* <Routes> */}
      {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/elevator-pitch" element={<ElevatorPitch />} />
          <Route path="/bio" element={<About2 />} /> */}
      {/* </Routes>
      </BrowserRouter> */}
    </div>

  );
}

export default App;