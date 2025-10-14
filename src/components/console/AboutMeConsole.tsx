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
      pl:"Jestem programistą z doświadczeniem w fullstack web developmencie (ASP.NET Core, React, Node.js) oraz projektach VR/AR w Unity. Łączę backend, frontend i technologie 3D, tworząc opracowane rozwiązania. W pracy stawiam na jakość kodu, architekturę i współpracę zespołową. Szybko uczę się nowych technologii i skutecznie adaptuję do zmieniających się wymagań projektowych.",
      en:" I am a developer with experience in full-stack web development (ASP.NET Core, React, Node.js) and VR/AR projects in Unity. I combine backend, frontend, and 3D technologies to create olished solutions. In my work, I emphasize code quality, architecture, and teamwork. I learn new technologies quickly and effectively adapt to changing project requirements."
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
