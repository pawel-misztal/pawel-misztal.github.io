import {
  motion,
  scale,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { tr } from "motion/react-client";
import { useEffect } from "react";
import { ButtonNavbar } from "./ButtonNavbar";

export function Navbar() {
  const height = 80;
  const { scrollY } = useScroll();

  let finalScroll = useTransform(scrollY, (x) => {
    return x > height ? 0 : -height;
  });

  finalScroll = useSpring(finalScroll, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.header
        style={{
          translateY: finalScroll,
          // top: finalScroll,
        }}
        className="fixed z-50 left-0 right-0 "
      >
        <nav
          className={`absolute bg-zinc-900/5  w-full backdrop-blur-sm  border-b-[1.5px] border-zinc-600 p-3 `}
        >
          <div className="hidden md:flex  flex-row gap-6 items-center ">
            <a href="#" className="mr-auto">
              <h1 className="text-4xl font-bold text-white">Paweł Misztal</h1>
            </a>
            <ButtonNavbar href="#about" text="O mnie"/>
            <ButtonNavbar href="#experience" text="Doświadczenie"/>
          </div>

          <div className="flex md:hidden flex-row-reverse">
            <button className="text-4xl font-bold text-white">X</button>
          </div>
        </nav>
      </motion.header>
    </>
  );
}


