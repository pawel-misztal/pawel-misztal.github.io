import ExperienceCompany from "./ExperienceCompany";
import {motion} from "motion/react"
import ExperienceCounter from "./ExperienceCounter";
import { MainTile } from "./MainTile";

export default function ProffesionalExperience() {

  return (
    <MainTile  id="experience" tileTitle="Doświadczenie zawodowe">
      <ExperienceCompany
            companyName="Orizon Group"
            workTime="paź 2023 - obecnie"
            companyPosition="Unity Developer"
            technologies={["C#", "Unity", "ASP.NET", "AR", "VR"]}
          >
            <div>
              <p>
                Tworzę zaawansowane aplikacje mobilne, AR, VR i webowe, łącząc
                technologię Unity z backendem .NET.
              </p>
              <p>Moje kluczowe obowiązki i osiągnięcia to:</p>
              <ul className="list-disc leading-relaxed pl-6 py-2">
                <li>
                  Backend .NET Development - Projektowanie architektury i
                  tworzenie REST API w ASP.NET Core, wykorzystanie Entity
                  Framework Core z SQLite oraz integracja z zewnętrznymi
                  usługami takimi jak np. Mailgun (w tym customowe template
                  HTML), Firestore storage, Google Docs
                </li>
                <li>
                  Aplikacje 3D, AR oraz VR - Projektowanie architektury i rozwój
                  interaktywnych konfiguratorów 3D, prezentacji VR oraz
                  aplikacji AR i minigier na urządzenia mobilne, optymalizacja
                  poprzez dynamiczne dostosowywanie jakości w WebGL
                </li>
                <li>
                  Praktyki developerskie - Praca w środowisku Agile/Scrum,
                  korzystanie z Gita w oparciu o feature branche i code review,
                  pisanie testów automatycznych, wykożysywanie wzorców
                  projektowych
                </li>
                <li>
                  Integracja systemów i Backend - Architektura i budowa serwera
                  synchronizacji danych pomiędzy aplikacją AR z wykorzystaniem
                  Kinect a tabletem, wysyłanie emaili, generowanie kodów QR
                </li>
              </ul>
              <p>
                Moje interdyscyplinarne doświadczenie pozwala mi efektywnie
                łączyć doświadczenie z backendu, frontendu i unity tworząc
                kompleksowe i wydajne rozwiązania
              </p>
            </div>
          </ExperienceCompany>

          <ExperienceCompany
            companyName="EJR Sp. z o.o."
            workTime="mar 2021 - maj 2023"
            companyPosition="Game Developer"
            technologies={["C#", "Unity"]}
          >
            <div>
              <p>
                Łączę kompetencję techniczne z artystycznymi, pracując na styku
                programowania i grafiki 3D w projekcie gry "Gułag".
              </p>
              <p>Zakres odpowiedzialności:</p>
              <ul className="list-disc leading-relaxed pl-6 py-2">
                <li>Projektowanie i implementacja mechanik rozgrywki,</li>
                <li>Implementacja shader'ów,</li>
                <li>
                  Onboarding i mentoring nowych grafików 3D - wprowadzenie w
                  procesy i standardy projektowe,
                </li>
                <li>
                  Zapewnianie spójności wizualnej oraz jakości technicznej
                  contentu graficznego.
                </li>
              </ul>
              <p>
                Moja interdyscyplinarna rola pozwala na efektywną komunikację
                między zespołami oraz szybsze rozwiązywanie problemów na
                przecięciu technologii i artystycznej wizji gry.
              </p>
            </div>
          </ExperienceCompany>
    </MainTile>
  )
}