import { AboutMeConsole } from "./console/AboutMeConsole";
import {motion} from "motion/react"

export default function AboutMe() {
  return (
    <div id="about" className="pt-20 pb-40">
        <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-center w-full lg:max-w-5xl gap-6 px-4">
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
            className="max-h-[480px] max-w-[348px] w-[80dvw]  rounded-4xl border-2 border-zinc-700 shadow-xl shadow-zinc-950/50"
          />
        </div>
        <p className="text-center py-6 text-zinc-500">Konsola jest interaktywna, wpisz "help" aby zobaczyć dostępne komendy</p>
      </div>
  )
}