import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export function BouncyScroll({text}:{text:string}) {
  const [isVisible, setIsVisible] = useState(true); 
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY,"change",(lastVal) => {
    if(isVisible && lastVal > 100) 
      setIsVisible(false);
  })

  return (
    <AnimatePresence>
      { isVisible && <motion.p
        initial={{ opacity: 1 }}
        exit={{opacity:0, scale:1.2, transition:{duration:1}}}
        className="animate-bounce absolute bottom-4"
      >
        ▼ {text} ▼
      </motion.p>}
    </AnimatePresence>
  );
}
