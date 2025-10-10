import { AddTranslations, UseTranslate } from "../utils/translator";
import EducationPlace from "./EducationPlace";
import ExperienceCompany from "./ExperienceCompany";
import { MainTile } from "./MainTile";


AddTranslations([
  {id:"polsl",t:{pl:"Politechika Śląska", en:"Silesian University of Technology"}},
  {id:"education",t:{pl:"Wykształcenie", en:"Education"}},
  {id:"mgrStudyTime",t:{pl:"mar 2024 - wrz 2025", en:"mar 2024 - sep 2025"}},
  {id:"mgrTitle",t:{pl:"Mgr Inż. Informatyk", en:"Master of Science in Computer Science"}},
  {id:"mgrSpec",t:{pl:"Internet i Technologie Sieciowe", en:"Internet and Network Technologies"}},
  {id:"inzStudyTime",t:{pl:"paź 2020 - lut 2024", en:"oct 2020 - feb 2024"}},
  {id:"inzTitle",t:{pl:"Inż. Mechatronik", en:"Mechatronics Engineer"}},

])

export default function Education() {
  const {t} = UseTranslate();
  return (
    <MainTile id="education" tileTitle={t("education")}>
      <EducationPlace
        where={t("polsl")}
        studyTime={t("mgrStudyTime")}
        title={t("mgrTitle")}
        spec={t("mgrSpec")}
        finalGrade="4,5"
      >

      </EducationPlace>
      <EducationPlace
        where={t("polsl")}
        studyTime={t("inzStudyTime")}
        title={t("inzTitle")}
        finalGrade="5"
      ></EducationPlace>
    </MainTile>
  );
}
