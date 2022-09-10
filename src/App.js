import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import { useEffect, useState } from 'react';
import About from './Components/About';
import About2 from './Components/About2';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Home2 from './Components/Home2';
import Projects from './Components/Projects';
import { motion } from "framer-motion"



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
  })
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
      <motion.div variants={variants} animate={cursorVariant} className='cursor' />

      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Home2 enter={textEnter} leave={textLeave} />
          </FullpageSection>
          <FullpageSection>
            <About2 enter={textEnter} leave={textLeave} />
          </FullpageSection>
          <FullpageSection>
            <Projects enter={textEnter} leave={textLeave} />
          </FullpageSection>
          <FullpageSection>
            <Contact name="contact" />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;