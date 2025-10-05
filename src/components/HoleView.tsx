import { useEffect, useRef, useState } from "react";
import { ThreeRenderer } from "../three/three";
import { motion, useMotionValueEvent, useScroll } from "motion/react"

export function HoleView() {
  const threeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const {scrollY} = useScroll()

  const [t, setT] = useState<ThreeRenderer|null>(null)

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
    setVisible(true);

    setT(three);
    return () => {
      three.dispose();
    };
  }, []);

  useMotionValueEvent(scrollY, 'change', (val) => {
    if(!t)
      return;
    t.scrollY = val / window.innerHeight / 2
  } )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0, transition: { duration: 4, delay:0 } }}
      ref={threeRef}
      className="w-screen h-full fixed -z-20 pointer-events-auto"
    ></motion.div>
  );
}
