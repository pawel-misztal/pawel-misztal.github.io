import {
  AnimatePresence,
  motion,
  scale,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { tr } from "motion/react-client";
import { useEffect, useState } from "react";
import { ButtonNavbar } from "./ButtonNavbar";

interface NavbarProps {
  activateScroll: number;
  animationDuration: number;
}

export function Navbar({ activateScroll , animationDuration = 0.4}: NavbarProps) {
  // const height = 80;
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (scrollY) => {
    if (!show && scrollY > activateScroll) setShow(true);
    else if (show && scrollY < activateScroll) setShow(false);
  });


  return (
    <>
      <AnimatePresence>
        {show &&
        <motion.header
          initial={{
            opacity:0,
            translateY:-40
          }}
          animate={{
            opacity:1,
            translateY:0,
            transition:{
              duration:animationDuration,
              ease:"easeIn"
            }
          }}
          exit={{
            opacity:0,
            translateY:-40,
            transition:{
              duration:animationDuration,
              ease:"easeOut"
            }
          }}
          className="fixed z-50 left-0 right-0 "
        >
          <nav
            className={`absolute bg-zinc-900/5  w-full backdrop-blur-sm  border-b-[1.5px] border-zinc-600 p-3 z-10`}
          >
            <div className="hidden md:flex  flex-row gap-6 items-center ">
              <a href="#" className="mr-auto">
                <h1 className="text-4xl font-bold text-white hover:text-shadow-lg hover:text-shadow-zinc-50/20 transition-all">Paweł Misztal</h1>
              </a>
              <ButtonNavbar href="#about" text="O mnie" />
              <ButtonNavbar href="#experience" text="Doświadczenie" />
              <ButtonNavbar href="#projects" text="Projekty" />
              <ButtonNavbar href="#" text="Blog ⇗" />
            </div>

            <div className="flex md:hidden flex-row-reverse">
              <button className="text-4xl font-bold text-white">X</button>
            </div>
          </nav>
        </motion.header> }
      </AnimatePresence>
    </>
  );
}
