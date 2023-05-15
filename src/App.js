import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clip from "../src/assets/mar-de-fondo.mp4";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // console.log("window.scrollY: ", window.scrollY);
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* BG-VIDEO */}
      {/* <video
        autoPlay
        loop
        muted
        className="h-[100%] w-[100%] fixed z-1 object-cover"
      >
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </video> */}

      {/* NAVBAR */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* LANDING */}
      <div className="w-5/6  mx-auto md:h-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      {/* PROJECT */}
      <div className="w-5/6 mx-auto mt-7">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="w-5/6 mx-auto mt-7 ">
        <motion.div
          margin="0 0 0 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>

      {/* CONTACT */}
      <div className="w-5/6 mx-auto mt-7">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto mt-7">
        <Footer />
      </div>
    </div>
  );
}

export default App;
