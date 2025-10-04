import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import * as THREE from "three";
import { ThreeRenderer } from "./three/three";
import { Navbar } from "./components/Navbar";
import { HoleView } from "./components/HoleView";
import {
  motion,
} from "motion/react";
import { TypeWriter } from "./components/TypeWriter";
import { BouncyScroll } from "./components/BouncyScroll";
import { HoleGradientTransition } from "./components/HoleGradientTransition";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="w-full h-dvh relative flex flex-col justify-center items-center">
        <HoleView />
        <HoleGradientTransition /> 
        <div className="mx-2 px-6 py-4 backdrop-blur-xs bg-zinc-900/25 rounded-2xl shadow-zinc-950 
        shadow-2xl border-[1px] border-zinc-700 flex flex-col gap-6">
          <h1 className="text-7xl font-extrabold text-white font-sans text-center">
            Paweł Misztal
          </h1>
          <TypeWriter className="text-white text-xl h-5"  texts={["Full Stack Developer", "VR Developer", "Unity Developer", "Average Code Enjoyer"]} />
        </div>
        <BouncyScroll text={"scroll"}/>
      </div>
      <h1 className="text-4xl font-bold">Paweł Misztal</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>{" "}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>{" "}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

