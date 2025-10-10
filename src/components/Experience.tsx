
import { translations, UseTranslate } from "../utils/translator";
import ExperienceCounter from "./ExperienceCounter";
import { MainTile } from "./MainTile";

translations.set("experience-title", {
  pl: "Nie pierwszy raz widzę kod!",
  en: "This isn't the first time I've seen the code!",
});
// AddTranslations([{ id: "test", t: { pl: "", en: "" } }]);

export default function Experience() {
  const {t} = UseTranslate();
  return (
    <MainTile
      id="experience"
      className="pt-20 pb-0 px-4"
      tileTitle={t("experience-title")}
    >
      <ExperienceCounter />
    </MainTile>
  );
}
