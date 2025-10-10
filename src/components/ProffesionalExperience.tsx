import ExperienceCompany from "./ExperienceCompany";
import { motion } from "motion/react";
import ExperienceCounter from "./ExperienceCounter";
import { MainTile } from "./MainTile";
import { UseTranslate } from "../utils/translator";

export default function ProffesionalExperience() {
  const { il } = UseTranslate();

  return (
    <MainTile id="experience" tileTitle="Doświadczenie zawodowe">
      <ExperienceCompany
        companyName="Orizon Group"
        workTime={il({pl:"paź 2023 - obecnie",en:"oct 2023 - present"})}
        companyPosition="Unity Developer"
        technologies={["C#", "Unity", "ASP.NET", "AR", "VR"]}
      >
        <div>
          <p>
            {il({
              pl: "Tworzę zaawansowane aplikacje mobilne, AR, VR i webowe, łącząc technologię Unity z backendem .NET.",
              en: "I create advanced mobile, AR, VR, and web applications, combining Unity technology with a .NET backend.",
            })}
          </p>
          <p>
            {il({
              pl: "Moje kluczowe obowiązki i osiągnięcia to:",
              en: "My key responsibilities and achievements include:",
            })}
          </p>
          <ul className="list-disc leading-relaxed pl-6 py-2">
            <li>
              {il({
                pl: "Backend .NET Development - Projektowanie architektury i tworzenie REST API w ASP.NET Core, wykorzystanie Entity Framework Core z SQLite oraz integracja z zewnętrznymi usługami takimi jak np. Mailgun (w tym customowe template HTML), Firestore storage, Google Docs",
                en: "Backend .NET Development - Designing architecture and creating REST APIs in ASP.NET Core, using Entity Framework Core with SQLite, and integrating with external services such as Mailgun (including custom HTML templates), Firestore storage, Google Docs",
              })}
            </li>
            <li>
              {il({
                pl: "Aplikacje 3D, AR oraz VR - Projektowanie architektury i rozwój interaktywnych konfiguratorów 3D, prezentacji VR oraz aplikacji AR i minigier na urządzenia mobilne, optymalizacja poprzez dynamiczne dostosowywanie jakości w WebGL",
                en: "3D, AR and VR applications - Architecture design and development of interactive 3D configurators, VR presentations, AR applications and minigames for mobile devices, optimization through dynamic quality adjustment in WebGL",
              })}
            </li>
            <li>
              {il({
                pl: "Praktyki developerskie - Praca w środowisku Agile/Scrum, korzystanie z Gita w oparciu o feature branche i code review, pisanie testów automatycznych, wykożysywanie wzorców projektowych",
                en: "Development practices - Working in an Agile/Scrum environment, using Git based on feature branches and code review, writing automated tests, using design patterns",
              })}
            </li>
            <li>
              {il({
                pl: "Integracja systemów i Backend - Architektura i budowa serwera synchronizacji danych pomiędzy aplikacją AR z wykorzystaniem Kinect a tabletem, wysyłanie emaili, generowanie kodów QR",
                en: "System integration and backend - Architecture and construction of a data synchronization server between an AR application using Kinect and a tablet, sending emails, generating QR codes",
              })}
            </li>
          </ul>
          <p>
            {il({
                pl: "Moje interdyscyplinarne doświadczenie pozwala mi efektywnie łączyć doświadczenie z backendu, frontendu i unity tworząc kompleksowe i wydajne rozwiązania",
                en: "My interdisciplinary experience allows me to effectively combine my experience with backend, frontend, and Unity to create comprehensive and efficient solutions.",
              })}
          </p>
        </div>
      </ExperienceCompany>

      <ExperienceCompany
        companyName="EJR Sp. z o.o."
        workTime={il({pl:"mar 2021 - maj 2023",en:"mar 2021 - may 2023"})}
        companyPosition="Game Developer"
        technologies={["C#", "Unity"]}
      >
        <div>
          <p>
            {il({
              pl: "Łączę kompetencję techniczne z artystycznymi, pracując na styku programowania i grafiki 3D w projekcie gry \"Gułag\".",
              en: "I combine technical and artistic competences, working at the intersection of programming and 3D graphics in the game project \"Gulag\".",
            })}
          </p>
          <p>
            {il({
              pl: "Zakres odpowiedzialności:",
              en: "Scope of responsibility:",
            })}</p>
          <ul className="list-disc leading-relaxed pl-6 py-2">
            <li>
            {il({
              pl: "Projektowanie i implementacja mechanik rozgrywki,",
              en: "Design and implementation of gameplay mechanics,",
            })}</li>
            <li>
              {il({
              pl: "Implementacja shaderów,",
              en: "Shader implementation,",
            })}
              </li>
            <li>
              {il({
              pl: "Onboarding i mentoring nowych grafików 3D - wprowadzenie w procesy i standardy projektowe,",
              en: "Onboarding and mentoring new 3D graphic designers - introduction to design processes and standards,",
            })}
            </li>
            <li>
              {il({
              pl: "Zapewnianie spójności wizualnej oraz jakości technicznej contentu graficznego.",
              en: "Ensuring visual consistency and technical quality of graphic content.",
            })}
            </li>
          </ul>
          <p>
            {il({
              pl: "Moja interdyscyplinarna rola pozwala na efektywną komunikację między zespołami oraz szybsze rozwiązywanie problemów na przecięciu technologii i artystycznej wizji gry.",
              en: "My interdisciplinary role allows for effective communication between teams and faster problem-solving at the intersection of technology and the game's artistic vision.",
            })}
          </p>
        </div>
      </ExperienceCompany>
    </MainTile>
  );
}
