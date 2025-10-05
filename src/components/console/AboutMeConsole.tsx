import { motion } from "motion/react";
import { Carret } from "../Carret";
import { useEffect, useRef, useState } from "react";
import ConsoleResponse from "./ConsoleResponse";
import ConsoleFilledInput from "./ConsoleFilledInput";
import ConsoleInputActive from "./ConsoleInputActive";

declare type ConsoleHist = {
  isInput: boolean;
  text: string;
};

const CMD_RES = {
  aboutMe: {
    cmd:"aboutme",
    res:"Jestem progranistą z kilkuletnim doświadczeniem. Wcześniejsze duże doświadczenie z C# i Unity w projektach gier VR oraz AR, potrafię sukcesywnie przełożyć na tworzenie jakościowych aplikacji webowych. W ostatnim czasie intensywnie rozwijam swoje kompetencje jako fullstack developer aplikacje bazy danych , webowe oparte na ASP.NET Core, React, TypeScript SQL. Jestem osobą ambitną, zaangażowaną, nastawioną na rozwiązywanie problemów, lubiącą współpracę i ciągłe poszerzanie wiedzy.",
  },
  help: {
    cmd:"help",
    res:"Możesz wpisywać komendy w konsoli 😎\n"+
    "Lista obsługiwanych komend:\n"+
    "\thelp - pomoc oraz wypisuje wszystkie komendy\n"+
    "\taboutme - wypisuje informacje o Paweł Misztal\n"+
    "\tclear - czyści konsole\n"+
    "\tlinkedin - przenosi cię do mojego linkedina\n"+
    "\tgithub - przenosi cię do mojego githuba\n"
  }
}

export function AboutMeConsole() {
  const [hist, setHist] = useState<ConsoleHist[]>([
    { isInput: true, text: CMD_RES.aboutMe.cmd },
    {
      isInput: false,
      text: CMD_RES.aboutMe.res
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleConsoleClick = () => {
    inputRef.current?.select();
  };

  function handleConsoleSubmit(cmd: string) {
    console.log("submit action");
    if(cmd === "clear") {
      setHist([]);
      return;
    }

    if(cmd === "linkedin") {
      window.open("https://www.linkedin.com/in/pawe%C5%82misztal/", "_blank")
      return;
    }

    if(cmd === "github") {
      window.open("https://github.com/pawel-misztal", "_blank")
      return;
    }

    let res = ""
    if(cmd === CMD_RES.aboutMe.cmd) {
      res = CMD_RES.aboutMe.res
    }
    if(cmd === CMD_RES.help.cmd) {
      res = CMD_RES.help.res
    }


    setHist((prev) => {
      const newHist = [...prev, { isInput: true, text: cmd }, { isInput: false, text: res } ];
      return newHist;
    });

  }

  useEffect(() => {

    inputRef.current?.scrollIntoView({behavior:"smooth", block:"nearest"})
  }, [hist])

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: -200,
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
      onClick={handleConsoleClick}
      className=" overflow-hidden h-[480px] max-h-dvh w-full bg-zinc-900 rounded-4xl border-zinc-700 shadow-xl shadow-zinc-950 border-2 flex flex-col "
    >
      <h2 className="w-full bg-zinc-800  px-6 py-2 font-bold text-2xl border-zinc-700 border-b-2">
        O mnie
      </h2>
      <div className="w-full overflow-y-scroll px-4 py-2 flex flex-col gap-2 pb-4">
        {hist.map((val, index) => {
          return val.isInput ? (
            <ConsoleFilledInput text={val.text} key={index} />
          ) : (
            <ConsoleResponse text={val.text} key={index} />
          );
        })}

        <ConsoleInputActive
          inputRef={inputRef}
          onSubmit={handleConsoleSubmit}
        />
      </div>
    </motion.div>
  );
}
