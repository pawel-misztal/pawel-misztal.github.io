import EducationPlace from "./EducationPlace";
import ExperienceCompany from "./ExperienceCompany";
import { MainTile } from "./MainTile";

export default function Education() {
  return (
    <MainTile id="education" tileTitle="Wykształcenie">
      <EducationPlace
        where="Politechnika śląska"
        studyTime="mar 2024 - wrz 2025"
        title="Mgr Inż. Informatyk"
        finalGrade="4,5"
      >

      </EducationPlace>
      <EducationPlace
        where="Politechnika śląska"
        studyTime="paź 2020 - lut 2024"
        title="Inż. Mechatronik"
        finalGrade="5"
      ></EducationPlace>
    </MainTile>
  );
}
