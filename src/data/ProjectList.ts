export const TECHNOLOGIES = {
  cs: "C#",
  efc: "Entity Famework Core",
  cpp: "C++",
  python: "Python",
  pytorch: "PyTorch",
  postgresql: "PostgreSQL",
  tailwindcss: "Tailwind CSS",
  expressJS: "ExpressJS",
  nodeJS: "NodeJS",
  sqlLite: "SQLite",
  ts_js: "TypeScript/JavaScipt",
  html: "HTML",
  css: "CSS",
  react: "React",
  aspnet: "ASP.NET Core",
};

export const TAGS = {
  all: "Wszystkie",
  fullstack: "Full Stack",
  unity: "Unity",
  vr: "VR",
  mechatronics: "Robotyka",
  ml: "ML/AI",
  university: "Studia",
};
export type ProjectDesc = {
  title: string;
  imgSrc?: string[];
  url?: string;
  technologies: string[];
  tags: string[];
  shortDescription: string;
  longDescription?: string;
};
export const PROJECTS: ProjectDesc[] = [
  {
    title: "Zlecenia",
    tags: [TAGS.fullstack],
    shortDescription:
      "Aplikacja webowa do zarządzania zleceniami przez niewielką firmę",
    imgSrc: ["Zlecenia.webp","Zlecenia2.webp"],
    longDescription: undefined,
    technologies: [
      TECHNOLOGIES.cs,
      TECHNOLOGIES.aspnet,
      TECHNOLOGIES.efc,
      TECHNOLOGIES.react,
      TECHNOLOGIES.html,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.postgresql,
    ],
  },
  {
    title: "Aplikacja randkowa dla psów 🐕",
    tags: [TAGS.fullstack,TAGS.university],
    shortDescription:
      "Aplikacja webowa wzorowana na tinder, z tą różnicą że ma ona służyć do maczowania psów właścicieli. ",
    longDescription:
      "Aplikacja webowa wzorowana na tinder, z tą różnicą że ma ona służyć do maczowania psów właścicieli. Włściciel po stworzeniu konta, może dodać swoje psy i wyszukać im macze w określonej odległości od aktualnego miejsca pobytu. Każdy macz można polubić, lub nie. Jeśli oba psy będą miały polubienie dla siebie w maczu to będą miały do siebie kontakt. Frontend wykonany w React, a backend w NodeJs z ExpressJS. Wyzwaniem w tym projekcie było wykonanie silnika generującego macze dla psów właścicieli",
    imgSrc: ["DoggieSpotted.webp"],
    technologies: [
      TECHNOLOGIES.ts_js,
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.expressJS,
      TECHNOLOGIES.sqlLite,
    ],
  },

  {
    title: "Platforma do kursów",
    tags: [TAGS.fullstack,TAGS.university],
    shortDescription:
      "Aplikacja webowa do rejestracji studentów na kursy uczelni.",
    longDescription:
      "Aplikacja webowa do rejestracji studentów na kursy uczelni. Aplikacja posiadała panel administratora umożliwiał tworzenie kursów, definiowanie limitów i dat zapisów. Studenci mogli zapisywać się na kursy zgodnie z przypisaną grupą dziekańską. Aplikacja posiada wbudowany moduł powiadomień tekstowych do uczestników kursów.",
    imgSrc: ["PlatformaV2.webp"],
    technologies: [
      TECHNOLOGIES.ts_js,
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.expressJS,
      TECHNOLOGIES.postgresql,
    ],
  },
  {
    title: "sad 3",
    tags: [TAGS.unity],
    shortDescription:
      "example short description lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum lorem impsum",
    longDescription: "",
    technologies: [TECHNOLOGIES.cs],
  },
];
