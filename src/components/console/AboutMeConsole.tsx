import { motion } from "motion/react";
import { Carret } from "../Carret";
import { useEffect, useRef, useState } from "react";
import ConsoleResponse from "./ConsoleResponse";
import ConsoleFilledInput from "./ConsoleFilledInput";
import ConsoleInputActive from "./ConsoleInputActive";
import { AddTranslations, UseTranslate } from "../../utils/translator";

AddTranslations([
  { id: "aboutme", t: { pl: "O mnie", en: "About me" } },
  {
    id: "res_wrongInput",
    t: {
      pl: 'Chyba zrobiłeś literówkę, wpisz "help" aby zobaczyć dostepne komendy',
      en: 'You must have made a typo, type "help" to see the available commands',
    },
  },
  {
    id: "res_help",
    t: {
      pl:
        "Możesz wpisywać komendy w konsoli 😎\n" +
        "Lista obsługiwanych komend:\n" +
        "\thelp - pomoc oraz wypisuje wszystkie komendy\n" +
        "\taboutme - wypisuje informacje o Paweł Misztal\n" +
        "\tclear - czyści konsole\n" +
        "\tlinkedin - przenosi cię do mojego linkedina\n" +
        "\tgithub - przenosi cię do mojego githuba\n",
      en:
        "You can enter commands in the console 😎\n" +
        "List of supported commands:\n" +
        "\thelp - provides help and lists all commands\n" +
        "\taboutme - lists information about Paweł Misztal\n" +
        "\tclear - clears the console\n" +
        "\tlinkedin - takes you to my LinkedIn\n" +
        "\tgithub - takes you to my Github\n",
    },
  },
  {
    id:"res_aboutme",
    t: {
      pl:"Jestem progranistą z kilkuletnim doświadczeniem. Wcześniejsze duże doświadczenie z C# i Unity w projektach gier VR oraz AR, potrafię sukcesywnie przełożyć na tworzenie jakościowych aplikacji webowych. W ostatnim czasie intensywnie rozwijam swoje kompetencje jako fullstack developer aplikacje bazy danych , webowe oparte na ASP.NET Core, React, TypeScript SQL. Jestem osobą ambitną, zaangażowaną, nastawioną na rozwiązywanie problemów, lubiącą współpracę i ciągłe poszerzanie wiedzy.",
      en:"I am a programmer with several years of experience. I have extensive previous experience with C# and Unity in VR and AR game projects, which I can successfully translate into creating high-quality web applications. Recently, I have been intensively developing my skills as a full-stack developer of database and web applications based on ASP.NET Core, React, and TypeScript SQL. I am an ambitious, committed person, focused on solving problems, and I enjoy collaboration and constantly expanding my knowledge."
    }
  }
]);

declare type ConsoleHist = {
  isInput: boolean;
  text: string;
};

const CMD_RES = {
  aboutMe: {
    cmd: "aboutme",
    res: "res_aboutme",
  },
  help: {
    cmd: "help",
    res: "res_help"
  },
};

export function AboutMeConsole() {
  const { t } = UseTranslate();
  const [hist, setHist] = useState<ConsoleHist[]>([
    { isInput: true, text: CMD_RES.aboutMe.cmd },
    {
      isInput: false,
      text: CMD_RES.aboutMe.res,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInit, setIsInit] = useState(true);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      // console.log(rect.height);
    }
  }, []);

  const handleConsoleClick = () => {
    inputRef.current?.select();
  };

  function handleConsoleSubmit(cmd: string) {
    // console.log("submit action");
    if (cmd === "clear") {
      setHist([]);
      return;
    }

    if (cmd === "linkedin") {
      window.open("https://www.linkedin.com/in/pawe%C5%82misztal/", "_blank");
      return;
    }

    if (cmd === "github") {
      window.open("https://github.com/pawel-misztal", "_blank");
      return;
    }

    let res = "";
    if (cmd === CMD_RES.aboutMe.cmd) {
      res = CMD_RES.aboutMe.res;
    } else if (cmd === CMD_RES.help.cmd) {
      res = CMD_RES.help.res;
    } else res = "res_wrongInput";

    setHist((prev) => {
      const newHist = [
        ...prev,
        { isInput: true, text: cmd },
        { isInput: false, text: res },
      ];
      return newHist;
    });
    setIsInit(false);
  }

  useEffect(() => {
    if (isInit) return;
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [hist]);

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
      className=" overflow-hidden h-[50dvh] lg:h-[480px] max-h-dvh w-full bg-zinc-900 rounded-4xl border-zinc-700 shadow-xl shadow-zinc-950/50 border-2 flex flex-col "
    >
      <h2 className="w-full bg-zinc-800  px-6 py-2 font-bold text-4xl border-zinc-700 border-b-2 uppercase">
        {t("aboutme")}
      </h2>
      <div
        ref={divRef}
        className="w-full overflow-y-scroll px-4 py-2 flex flex-col gap-2 pb-4"
      >
        {hist.map((val, index) => {
          return val.isInput ? (
            <ConsoleFilledInput text={val.text} key={index} />
          ) : (
            <ConsoleResponse text={t(val.text)} key={index} />
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
