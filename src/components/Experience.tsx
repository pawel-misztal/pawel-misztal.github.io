import ExperienceCounter from "./ExperienceCounter";
import { MainTile } from "./MainTile";



export default function Experience() {
  return (
    <MainTile id="experience" className="pt-20 pb-0 px-4" tileTitle="Nie pierwszy raz widzę kod!">
      <ExperienceCounter />
    </MainTile>
  )
}