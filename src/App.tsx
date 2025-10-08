import { useEffect, useRef, useState } from "react";

import "./App.css";
// import * as THREE from "three";
import { Navbar } from "./components/Navbar";
import { HoleView } from "./components/HoleView";
import { easeIn, motion } from "motion/react";
import { TypeWriter } from "./components/TypeWriter";
import { BouncyScroll } from "./components/BouncyScroll";
import { HoleGradientTransition } from "./components/HoleGradientTransition";
import { LinkedinIcon } from "./components/LinkedinIcon";
import { GithubIcon } from "./components/GithubIcon";
import { AboutMeConsole } from "./components/console/AboutMeConsole";
import ProffesionalExperience from "./components/ProffesionalExperience";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { MainTile } from "./components/MainTile";
import { ButtonNavbar } from "./components/ButtonNavbar";
import Education from "./components/Education";

function App() {
  const [count, setCount] = useState(0);

  console.log(navigator.language);
  console.log(navigator.languages);

  return (
    <>
      <Navbar
        activateScroll={window.innerHeight * 0.7}
        animationDuration={0.4}
      />
      <div className="w-full h-lvh relative flex flex-col justify-center items-start">
        <HoleView />
        <HoleGradientTransition />
        <div className="flex flex-col gap-7 pl-[5dvw] items-center">
          <div
            className="
         flex flex-col gap-6 py-8"
          >
            <h1 className="text-8xl font-extrabold text-white font-sans text-left">
              Paweł Misztal
            </h1>
            <TypeWriter
              className="text-white text-xl h-5"
              texts={[
                "Full Stack Developer",
                "VR Developer",
                "Unity Developer",
                "Average Code Enjoyer",
              ]}
            />
          </div>

          <div className="flex flex-row gap-8">
            <a
              href="https://www.linkedin.com/in/pawe%C5%82misztal/"
              className="outline-none"
            >
              <LinkedinIcon />
            </a>
            <a href="https://github.com/pawel-misztal" className="outline-none">
              <GithubIcon />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex flex-row justify-center">
          <BouncyScroll text={"scroll"} />
        </div>
      </div>

      <Experience />
      <AboutMe />

      <ProffesionalExperience />
      <Projects />
      <MainTile id="skills" tileTitle="Co potrafię">
        <h1>Specjalizuję się w</h1>
        <h1>Mam też więdzę o</h1>
        <h1>Miałem też styczność z</h1>
      </MainTile>
      
      <Education />


      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-full my-30"
      >
        <h1 className="text-center text-4xl font-bold uppercase py-8">
          Chcesz dowiedzieć się więcej?
        </h1>

        <div className="flex flex-col w-full items-center py-8">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-2xl font-bold py-6">Zapraszam na bloga</h1>
            <div>
              <ButtonNavbar href="#" text="Blog ⇗" />
            </div>
          </div>

          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-2xl font-bold py-6">
              Skontaktuj się przez Linkedin
            </h1>
            <div>
              <ButtonNavbar
                blank={true}
                href="https://www.linkedin.com/in/pawe%C5%82misztal/"
                text="Linkedin ⇗"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* <div className="h-dvh"></div> */}
    </>
  );
}

export default App;
