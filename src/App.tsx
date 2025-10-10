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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  AddTranslations,
  Translate,
  translations,
  UseTranslate,
} from "./utils/translator";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

translations.set("test-translation", {
  pl: "testowe tłumaczenie",
  en: "test translation",
});

function App() {
  const [count, setCount] = useState(0);

  // console.log(navigator.language);
  // console.log(navigator.languages);

  // console.log(Translate("experience-title",navigator.language));
  // console.log(Translate("experience-title","en-US"));
  // console.log(Translate("experience-title sadavs",navigator.language));

  // console.log(Translate("test-translation",navigator.language));
  // console.log(Translate("test-translation","en-US"));

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
                "Full-Stack Developer",
                ".Net Developer",
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
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

export default App;



