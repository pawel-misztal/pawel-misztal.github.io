import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import * as THREE from "three";
import { ThreeRenderer } from "./three/three";
import { Navbar } from "./components/Navbar";
import { HoleView } from "./components/HoleView";
import { easeIn, motion } from "motion/react";
import { TypeWriter } from "./components/TypeWriter";
import { BouncyScroll } from "./components/BouncyScroll";
import { HoleGradientTransition } from "./components/HoleGradientTransition";
import { LinkedinIcon } from "./components/LinkedinIcon";
import { GithubIcon } from "./components/GithubIcon";
import { AboutMeConsole } from "./components/console/AboutMeConsole";

function App() {
  const [count, setCount] = useState(0);

  console.log(navigator.language)
  console.log(navigator.languages)

  return (
    <>
      <Navbar activateScroll={window.innerHeight *0.7} animationDuration={0.4} />
      <div className="w-full h-dvh relative flex flex-col justify-center items-start">
        <HoleView />
        <HoleGradientTransition />
        {/* <div
          className="mx-2 my-28 px-52 py-8 backdrop-blur-xs bg-zinc-900/25 rounded-2xl shadow-zinc-950 
        shadow-2xl border-[1px] border-zinc-700 flex flex-col gap-6"
        >
          <h1 className="text-7xl font-extrabold text-white font-sans text-center">
            Paweł Misztal
          </h1>
          <TypeWriter
            className="text-white text-xl h-5 pl-4"
            texts={[
              "Full Stack Developer",
              "VR Developer",
              "Unity Developer",
              "Average Code Enjoyer",
            ]}
          />
        </div> */}
        <div className="flex flex-col gap-7 pl-[5dvw] items-center">
          <div
            className="
         flex flex-col gap-6 py-8"
          >
            <h1 className="text-7xl font-extrabold text-white font-sans text-left">
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
      <div id="about" className="pt-20 flex flex-row justify-center">
        <div className="flex flex-row justify-center w-full lg:max-w-5xl gap-6 px-4">
          <AboutMeConsole />
          <motion.img
            initial={{
              opacity: 0,
              translateX: 200,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            src="mordka.webp"
            className="h-[480px] max-h-dvh rounded-4xl border-2 border-zinc-700 shadow-xl shadow-zinc-950"
          />
        </div>
      </div>
      
      <div className="h-dvh"></div>
      <div className="h-dvh"></div>
      <div className="h-dvh"></div>
    </>
  );
}

export default App;


