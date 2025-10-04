import { useEffect, useRef, useState } from "react";
import { ThreeRenderer } from "../three/three";
import { motion } from "motion/react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

export function HoleView() {
  const threeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (threeRef!.current!.children.length > 0) return;
    const three = new ThreeRenderer(threeRef!.current!);
    // const canvas = threeRef!.current?.querySelector("canvas");
    // if(canvas){
    //   // canvas.style.opacity = '0';
    //   canvas.classList.add("transition-all", "transition-discrete", "opacity-0");

    //   requestAnimationFrame(()=>{
    //     canvas.classList.remove("opacity-0")
    //     canvas.classList.add("opacity-100")
    //   })
    // }


    return () => {
      three.dispose();
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0, transition: { duration: 4, delay:1 } }}
      ref={threeRef}
      className="w-full h-full absolute -z-10 pointer-events-auto"
    ></motion.div>
    // <div
    //   // initial={{ opacity: 0 }}
    //   // animate={{ opacity: visible ? 1 : 0, transition: { duration: 4, delay:1 } }}
    //   ref={threeRef}
    //   className="w-full h-full absolute -z-10"
    // ></div>
  );
}
