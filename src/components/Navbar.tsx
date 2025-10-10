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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AddTranslations, UseTranslate } from "../utils/translator";

interface NavbarProps {
  activateScroll: number;
  animationDuration: number;
}


AddTranslations([
  {id:"experience", t:{pl:"Doświadczenie",en:"Experience"}},
  {id:"projects", t:{pl:"Projekty",en:"Projects"}}
])

export function Navbar({ activateScroll , animationDuration = 0.4}: NavbarProps) {
  // const height = 80;
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const {t} = UseTranslate();

  useMotionValueEvent(scrollY, "change", (scrollY) => {
    if (!show && scrollY > activateScroll) setShow(true);
    else if (show && scrollY < activateScroll) setShow(false);
  });

  const {currentLanguage, setCurrentLanguage} = UseTranslate();

  function handleChangeLang() {
    setCurrentLanguage((curLang:string):string => {
      if(curLang.toLowerCase() == "pl")
        return "en"
      else 
        return "pl"
    } );
  }


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
              <ButtonNavbar  text={currentLanguage} onClick={handleChangeLang}/>
              <ButtonNavbar href="#about" text={t("aboutme")} />
              <ButtonNavbar href="#experience" text={t("experience")} />
              <ButtonNavbar href="#projects" text={t("projects")} />
              {/* <ButtonNavbar href="#" text="Blog"><FaArrowUpRightFromSquare className="h-full"/></ButtonNavbar> */}
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
