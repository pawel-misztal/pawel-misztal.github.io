import { line } from "motion/react-client";
import { AddTranslations, type Translation } from "../utils/translator";

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
  unity: "Unity",
  opencv: "OpenCV",
  esp32: "ESP 32",
  vr: "VR",
  postman: "Postman",
  xUnitTest: "XUnit",
  jwt: "JWT",
  oAuth20: "OAuth2.0",
  angular: "Angular",
  sqlServer: "MS SQL Server",
  docker: "Docker",
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

export type LinkDescription = {
  link: string;
  description: string;
};

export type ProjectDesc = {
  title: string;
  imgSrc?: string[];
  url?: LinkDescription[];
  technologies: string[];
  tags: string[];
  shortDescription: string | Translation;
  longDescription?: string | Translation;
};

AddTranslations([
  { id: "awdawdawdaw", t: { pl: "", en: "" } },
  { id: "Zlecenia-title", t: { pl: "Zlecenia", en: "Zlecenia" } },
  { id: "Notes-title", t: { pl: "Notatki", en: "Notes" } },
  {
    id: "dogdateapp-title",
    t: { pl: "Aplikacja randkowa dla psów 🐕", en: "Dating app for dogs 🐕" },
  },
  {
    id: "courseApp-title",
    t: { pl: "Platforma do kursów", en: "Course platform" },
  },
  {
    id: "aotkr-title",
    t: { pl: "Attack of the killer robot", en: "Attack of the killer robot" },
  },
  {
    id: "magneball-title",
    t: { pl: "Magneball", en: "Magneball" },
  },
  {
    id: "eduVR-title",
    t: { pl: "Edukacyjna gra VR", en: "Educational VR game" },
  },
  {
    id: "autoimage-title",
    t: {
      pl: "Automatyczne wykrywanie i zliczanie powtarzalnych obiektów na obrazach przemysłowych",
      en: "Automatic detection and counting of repetitive objects in industrial images",
    },
  },
  {
    id: "mgr-title",
    t: {
      pl: "Ślepa ocena jakości obrazu",
      en: "Blind image quality assessment",
    },
  },
  {
    id: "inz-title",
    t: {
      pl: "Ramię robota sterowane mikroprocesorowo",
      en: "Microprocessor-controlled robot arm ",
    },
  },
]);

export const PROJECTS: ProjectDesc[] = [
  {
    title: "Zlecenia-title",
    tags: [TAGS.fullstack],
    shortDescription: {
      pl: "Aplikacja webowa do zarządzania zleceniami przez niewielką firmę",
      en: "A web application for managing jobs for a small company",
    },
    imgSrc: ["Zlecenia.webp", "Zlecenia2.webp"],
    longDescription: undefined,
    technologies: [
      TECHNOLOGIES.cs,
      TECHNOLOGIES.aspnet,
      TECHNOLOGIES.efc,
      TECHNOLOGIES.react,
      TECHNOLOGIES.html,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.xUnitTest,
      TECHNOLOGIES.jwt,
    ],
  },
  {
    title: "Notes-title",
    shortDescription: {
      pl: "Każdy szanujący się full stack develiper musi posiadać aplikację do notatek 😅 ta jednak wykracza poza podstawowego cruda",
      en: "Every self-respecting full stack developer must have a notes app 😅 but this one goes beyond the basic crud",
    },
    longDescription: {
      pl: '"Kompleksowe" notatki, backend wykonany w ASP.NET CORE z wykorzystaniem Entity Framework Core i SQL Server. Do budowy frontendu wykorzystano Angular. \n\nZaimplementowano:\n- Uwierzytelnianie - logowanie i rejestracja przy pomocy login + hasło, z wykorzystaniem JWT\n- wyszukiwanie fraz i tekstu w notatkach\n- paginacja notatek\n- typowe operacje CRUD - dodwanie, odczhytywanie, modyfikowanie i usuwanie notatek\n- konta urzytkowników\n- rate limiter na backendzie\n- blokowanie ip na backendzie\n- OpenAPI wraz ze ScalarApi\n- walidacja danych od użytkownika',
      en: '"Comprehensive" notes, backend built in ASP.NET CORE using Entity Framework Core and SQL Server. Angular was used to build the frontend. \n\nImplemented:\n- Authentication - login and registration using login + password, using JWT\n- searching for phrases and text in notes\n- note pagination\n- typical CRUD operations - adding, reading, modifying, and deleting notes\n- user accounts\n- rate limiter on the backend\n- IP blocking on the backend\n- OpenAPI with ScalarAPI\n- user data validation',
    },
    technologies: [
      TECHNOLOGIES.cs,
      TECHNOLOGIES.aspnet,
      TECHNOLOGIES.angular,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.html,
      TECHNOLOGIES.jwt,
      TECHNOLOGIES.sqlServer,
      TECHNOLOGIES.efc,
      TECHNOLOGIES.docker,
    ],
    tags: [TAGS.fullstack],
    imgSrc: ["crudLogin.webp", "crudAdd.webp", "crudNotes.webp"],
    url: [
      {
        description: "Github",
        link: "https://github.com/pawel-misztal/CrudAngularAspNet",
      },
    ],
  },
  {
    title: "dogdateapp-title",
    tags: [TAGS.fullstack, TAGS.university],
    shortDescription: {
      pl: "Aplikacja webowa wzorowana na tinder, z tą różnicą że ma ona służyć do maczowania psów ich właścicieli.",
      en: "A web application inspired by Tinder, with the difference that it is intended for matching dogs owned by their owners",
    },
    longDescription: {
      pl: "Aplikacja webowa wzorowana na tinder, z tą różnicą że ma ona służyć do maczowania psów właścicieli. Włściciel po stworzeniu konta, może dodać swoje psy i wyszukać im macze w określonej odległości od aktualnego miejsca pobytu. Każdy macz można polubić, lub nie. Jeśli oba psy będą miały polubienie dla siebie w maczu to będą miały do siebie kontakt. Frontend wykonany został w React, a backend w NodeJs z ExpressJS. Wyzwaniem w tym projekcie było wykonanie silnika generującego macze dla psów bazując na odgległości",
      en: "A web application inspired by Tinder, with the difference that it is intended for matching dogs owned by their owners. After creating an account, owners can upload their dogs and search for them within a radius of their current location. Each tag can be liked or disliked. If both dogs are treated to the same tag, they will be in contact with each other. The frontend was developed in React, the backend in NodeJS with ExpressJS. The challenge in this case was to enable the dog to control the main control remotely.",
    },
    imgSrc: ["DoggieSpotted.webp"],
    technologies: [
      TECHNOLOGIES.ts_js,
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.expressJS,
      TECHNOLOGIES.sqlLite,
      TECHNOLOGIES.postman,
      // TECHNOLOGIES.oAuth20
    ],
    url: [
      {
        link: "https://github.com/pawel-misztal/DoogieSpotted",
        description: "Github",
      },
    ],
  },

  {
    title: "courseApp-title",
    tags: [TAGS.fullstack, TAGS.university],
    shortDescription: {
      pl: "Aplikacja webowa do rejestracji studentów na kursy uczelni.",
      en: "A web application for registering students for university courses.",
    },
    longDescription: {
      pl: "Aplikacja webowa do rejestracji studentów na kursy uczelni. Aplikacja posiadała panel administratora umożliwiał tworzenie kursów, definiowanie limitów i dat zapisów. Studenci mogli zapisywać się na kursy zgodnie z przypisaną grupą dziekańską. Aplikacja posiada wbudowany moduł powiadomień tekstowych do uczestników kursów.",
      en: "A web application for registering students for university courses. The application included an admin panel allowing for the creation of courses, defining limits and enrollment dates. Students could enroll in courses according to their assigned dean's group. The application also included a built-in text notification module for course participants.",
    },
    imgSrc: ["PlatformaV2.webp"],
    url: [
      {
        link: "https://github.com/matekul773/TAI_Projekt_2024-25",
        description: "Github",
      },
    ],
    technologies: [
      TECHNOLOGIES.ts_js,
      TECHNOLOGIES.react,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.expressJS,
      TECHNOLOGIES.postgresql,
    ],
  },

  {
    title: "aotkr-title",
    tags: [TAGS.unity, TAGS.vr],
    shortDescription: {
      pl: 'Gra VR stworzona podczas weekendowego Game Jam\'u "VR Jam 2021" - 2 Miejsce',
      en: 'VR game created during the weekend Game Jam "VR Jam 2021" - 2nd Place',
    },
    longDescription: {
      pl: 'Gra VR stworzona podczas weekendowego Game Jam\'u "VR Jam 2021" 2 Miejsce pod względem dostarczanej rozrywki i ogólne 3 miejsce. Rozgrywka polega na byciu robotem zrzuconym na miasto i głównym celem gracza jest zniszczenie tego miasta. Gra posiada zaawansowaną fizykę oraz innowacyjny sposób lokomocji. Stworzyłem tę grę wraz z przypadkowym brytyjczykiem (poznanym na discord), moją rolą było pisanie kodu, a jego tworzenie modeli',
      en: 'A VR game created during the weekend Game Jam "VR Jam 2021" took 2nd place in terms of entertainment provided and 3rd place overall. The gameplay involves being a robot dropped onto a city, and the player\'s main goal is to destroy it. The game features advanced physics and an innovative method of locomotion. I created this game together with a random British guy (met on Discord); my role was to write the code, and his role was to create models.',
    },
    technologies: [TECHNOLOGIES.cs, TECHNOLOGIES.unity, TECHNOLOGIES.vr],
    url: [
      {
        link: "https://mrpawolo.itch.io/attack-of-the-killer-robot",
        description: "itch.io",
      },
      { link: "https://github.com/pawel-misztal/VR1", description: "Github" },
    ],
    imgSrc: [
      "aokt.webp",
      "https://www.youtube.com/embed/LdUXviN6QHE?si=sKsdW8GWarZZ0fNS",
    ],
  },
  {
    title: "magneball-title",
    tags: [TAGS.unity, TAGS.vr],
    imgSrc: [
      "magneball.webp",
      "https://www.youtube.com/embed/4-G5nma067I?si=jaG9yvKdB__u5c0l",
    ],
    shortDescription: {
      pl: 'Gra VR zrobiona podczas Game Jam\'a "VR Super Jam" osiągnęła 3 Miejsce pod względem kreatywności',
      en: 'The VR game created during the Game Jam "VR Super Jam" achieved 3rd place in terms of creativity',
    },
    longDescription: {
      pl: "Gra VR zrobiona podczas Game Jam'a \"VR Super Jam\" osiągnęła 3 Miejsce pod względem kreatywności i 14 ogółem. Gracz przebywa w pokoju z automatem do gier, poruszając joystick'ami automatu steruje kulką w automacie, celem jest przejście wszystkich poziomów Stworzyłem tę grę wraz z przypadkowym brytyjczykiem (poznanym na discord), moją rolą było pisanie kodu, a jego tworzenie modeli",
      en: 'A VR game created during the Game Jam "VR Super Jam" reached 3rd place in terms of creativity and 14th overall. The player is in a room with an arcade machine, moving the joysticks of the machine controls the ball in the machine, the goal is to complete all the levels. I created this game together with a random British guy (met on Discord), my role was to write the code, and his role was to create models',
    },
    technologies: [TECHNOLOGIES.cs, TECHNOLOGIES.unity, TECHNOLOGIES.vr],
    url: [
      {
        link: "https://mrpawolo.itch.io/magne-ball",
        description: "itch.io",
      },
      {
        link: "https://github.com/pawel-misztal/VR2",
        description: "Github",
      },
    ],
  },
  {
    title: "eduVR-title",
    shortDescription: {
      pl: "gra VR w której gracz wciela się w mechanika statku kosmicznego, który rozbił się na marsie",
      en: "a VR game in which the player takes on the role of a mechanic of a spaceship that crashed on Mars",
    },
    longDescription: {
      pl: "gra VR w której gracz wciela się w mechanika statku kosmicznego, który rozbił się na marsie. Gracz ma za zadanie rozwiązywać łamigłówki mechaniczne w celu naprawienia statku, pomaga mu w tym mówiący robot pomocnik. Był to projekt w którym konieczne było wykorzystanie customowo wykonanej rękawicy do VR z siłowym sprzężeniem zwrotnym. Wyzwaniem było zrobienie fizyki dłoni z symulacją wszystkich palców dłoni które mogłyby wchodzić w interakcję z otoczeniem.",
      en: "A VR game in which the player takes on the role of a spaceship mechanic who has crashed on Mars. The player must solve mechanical puzzles to repair the ship, aided by a talking robot assistant. This project required the use of a custom-made VR glove with force feedback. The challenge was to create hand physics, simulating all the fingers of the hand that could interact with the environment.",
    },
    tags: [TAGS.unity, TAGS.university, TAGS.vr],
    technologies: [TECHNOLOGIES.cs, TECHNOLOGIES.vr],
    imgSrc: [
      "rek1.webp",
      "rek2.webp",
      "https://www.youtube.com/embed/PT0qzveI_jw?si=T__axHq3R0myd2-q",
    ],
    url: [
      {
        description: "Github",
        link: "https://github.com/pawel-misztal/v4inz",
      },
      {
        description: "Youtube",
        link: "https://youtu.be/PT0qzveI_jw?si=hFS_jKH0o_xkdu5i",
      },
    ],
  },

  {
    title: "autoimage-title",
    tags: [TAGS.ml, TAGS.university],
    imgSrc: ["mlMatrix.webp"],
    shortDescription: {
      pl: "Pipeline do wykrywania i zliczania obiektów na obrazach przemysłowych, działający bez wcześniejszej wiedzy o ich wyglądzie.",
      en: "Pipeline for detecting and counting objects in industrial images, operating without prior knowledge of their appearance.",
    },
    longDescription: {
      pl: "W ramach projektu opracowałem kompletny pipeline do analizy obrazów przemysłowych, umożliwiający identyfikację, lokalizację i klasyfikację powtarzalnych obiektów bez wcześniejszej wiedzy o ich wyglądzie. Ze względu na brak rzeczywistych danych, stworzyłem realistyczny generator obrazów w silniku Unity, uwzględniający perspektywę kamery, szumy optyczne i odchylenia położenia obiektów.\n\n Algorytm składa się z czterech głównych etapów:\n- segmentacja obiektów (UNetMini)\n- wykrywanie konturów i korekcja perspektywy (OpenCV)\n- tworzenie macierzy obecności (K-średnich + Silhouette)\n- identyfikacja typu obiektu (EfficientNet_b0 + cosine similarity).\n\n Projekt wykazał wysoką skuteczność w generalizacji – algorytm poprawnie rozpoznaje nowe typy obiektów i radzi sobie z nieregularnym ułożeniem. Całość została zaimplementowana w Pythonie jako gotowa klasa do użycia w systemach przemysłowych.",
      en: "As part of the project, I developed a complete pipeline for industrial image analysis, enabling the identification, localization, and classification of repetitive objects without prior knowledge of their appearance. Due to the lack of real-world data, I created a realistic image generator in the Unity engine, taking into account camera perspective, optical noise, and object position deviations.\n\n The algorithm consists of four main stages\n: - object segmentation (UNetMini)\n - contour detection and perspective correction (OpenCV)\n - presence matrix creation (K-means + Silhouette)\n- object type identification (EfficientNet_b0 + cosine similarity).\n\n The project demonstrated high generalization efficiency – the algorithm correctly recognizes new object types and handles irregular alignments. The entire process was implemented in Python as a ready-made class for use in industrial systems.",
    },
    technologies: [
      TECHNOLOGIES.python,
      TECHNOLOGIES.pytorch,
      TECHNOLOGIES.opencv,
      TECHNOLOGIES.unity,
      TECHNOLOGIES.cs,
    ],
  },

  {
    title: "mgr-title",
    tags: [TAGS.ml, TAGS.university],
    technologies: [TECHNOLOGIES.python, TECHNOLOGIES.pytorch],
    imgSrc: ["tres.webp"],
    url: [
      {
        link: "https://github.com/pawel-misztal/TReS_mag/tree/cleanup",
        description: "Github",
      },
      { link: "RAu-MGR-297712-2025.pdf", description: "Praca magisterska" },
    ],
    shortDescription: {
      pl: "Projekt magisterski implementujący metodę bezrefeerencyjnej oceny jakości obrazu TReS wraz z gruntowną optymalizacją wydajności metody.",
      en: "Master's project implementing the TReS referenceless image quality assessment method along with thorough optimization of the method's performance.",
    },
    longDescription: {
      pl: "Praca magisterska polegająca na implementacji, modyfikacji i optymalizacji modelu TReS (transformerowy model do NR‑IQA) w celu poprawy jakości predykcji bez użycia obrazu referencyjnego.\n\nKluczowe osiągnięcia:\n- Implementacja - pełna autorska implementacja modelu TReS w PyTorch, wykrycie i analiza niestandardowej implementacji transformera (pozycjonowanie enkodowania pozycji i normalizacji) oraz ich wpływu na wydajność.\n- Optymalizacje architektury - zastąpienie ResNet‑50 ekstraktorem ConvNeXt‑Tiny, wprowadzenie kodowania pozycji w każdej warstwie transformera oraz redukcja dropoutu (0.5 → 0.1), co znacząco obniżyło MAE i poprawiło SROCC/PLCC.\n- Nowa funkcja strat i ewaluacja - zaprojektowanie rankingowej straty z adaptacyjnym marginesem połączonej z MAE; kompleksowa ewaluacja (wiele podziałów losowych, augmentacja, testy na benchmarkach LIVE, CISQ, TID2013, KADID‑10k, CLIVE, KonIQ‑10k, BID) — średnie poprawy względem oryginału: +2.8% SROCC, +2.4% PLCC",
      en: "Master's thesis involving the implementation, modification, and optimization of the TReS model (transformer model for NR-IQA) to improve prediction quality without using a reference image.\n\nKey achievements:\n- Implementation - full proprietary implementation of the TReS model in PyTorch, detection and analysis of non-standard transformer implementation (position encoding and normalization positioning) and their impact on performance.\n- Architecture optimizations - replacing ResNet-50 with the ConvNeXt-Tiny extractor, introducing position encoding in each transformer layer, and reducing dropout (0.5 → 0.1), which significantly reduced MAE and improved SROCC/PLCC.\n- New loss function and evaluation - designing a ranking loss with adaptive margin combined with MAE; comprehensive evaluation (multiple random splits, augmentation, tests on LIVE, CISQ, TID2013, KADID‑10k, CLIVE, KonIQ‑10k, BID benchmarks) — average improvements over the original: +2.8% SROCC, +2.4% PLCC",
    },
  },

  {
    title: "inz-title",
    tags: [TAGS.mechatronics, TAGS.university, TAGS.unity],
    technologies: [TECHNOLOGIES.cs, TECHNOLOGIES.cpp, TECHNOLOGIES.esp32],
    shortDescription: {
      pl: "Projekt inżynierski ramienia robota z wykorzystaniem mikrokontrolera esp32 wraz z dedykowanym programem komputerowym do obsługi robota i tworzenia prostych makr",
      en: "Engineering thesis of a robot arm using an ESP32 microcontroller along with a dedicated computer program for operating the robot and creating simple macros",
    },
    longDescription: {
      pl: "Zaprojektowałem i wykonałem modułowe ramię robota o konstrukcji antropomorficznej typu do paletyzacji, zoptymalizowane pod druk 3D (PLA, PET‑G) i montaż modułowy. Na poziomie mechaniki przygotowałem modele CAD, zoptymalizowałem orientację pod FDM i osadziłem nakrętki M3 w elementach chwytaka; w układzie napędowym zastosowałem silniki krokowe Nema 17 z DRV8825, a całość steruje mikrokontroler ESP32‑S2. Wykonałem płytkę montażową, złożyłem wydruki i zintegrowałem układ z chwytakiem napędzanym serwem. \n\nOpracowałem pełny stos oprogramowania: nieblokujący analizator komend po serialu, algorytmy odwrotnej kinematyki, transformacje lokal→global oraz interpolację liniową trajektorii (rozkład ruchu na małe kroki przestrzenne dla liniowości toru). Dodatkowo stworzyłem dedykowaną aplikację desktopową (Unity + C#) do sterowania, kalibracji lokalnych układów współrzędnych i diagnostyki. Wyniki testów potwierdziły poprawę kształtu trajektorii po interpolacji oraz udźwig ~2,1 kg statycznie oraz ~1kg dynamicznie na ~0,46 m .",
      en: "I designed and manufactured a modular robot arm with an anthropomorphic structure for palletizing, optimized for 3D printing (PLA, PET-G) and modular assembly. Mechanically, I prepared CAD models, optimized orientation for FDM, and embedded M3 nuts in the gripper components. The drive system utilized Nema 17 stepper motors with a DRV8825, and the entire system was controlled by an ESP32-S2 microcontroller. I fabricated the mounting plate, assembled the prints, and integrated the system with the servo-driven gripper. I developed a full software stack: a non-blocking serial command analyzer, inverse kinematics algorithms, local-to-global transformations, and linear trajectory interpolation (decomposing motion into small spatial steps for linear path alignment). Additionally, I created a dedicated desktop application (Unity + C#) for control, local coordinate system calibration, and diagnostics. Test results confirmed improvement in trajectory shape after interpolation and a load capacity of ~2.1 kg statically and ~1 kg dynamically at ~0.46 m.",
    },
    imgSrc: ["robot.webp", "robotApp.webp"],
    url: [
      { description: "Praca inżynierska", link: "RMT-INZ-297712-2024.pdf" },
      {
        description: "Github",
        link: "https://github.com/pawel-misztal/InzPBL",
      },
    ],
  },
];
