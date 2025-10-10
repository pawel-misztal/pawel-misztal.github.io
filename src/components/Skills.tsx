import { UseTranslate } from "../utils/translator";
import { MainTile } from "./MainTile";

export function Skills() {
  const { t, il } = UseTranslate();
  return (
    <MainTile id="skills" tileTitle={il({ pl: "Umiejętności", en: "Skills" })}>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 w-full mb-6">
      <SkillsSection
        title={il({ pl: "Języki programowania:", en: "Programing languages:" })}
        names={["C#", "TypeScript/JavaScript", "Python", "C++", "CSS", "HTML"]}
      />
      <SkillsSection
        title={il({ pl: "Bazy danych:", en: "Data bases:" })}
        names={["PostgreSQL", "SQLite", "MS SQL Server", "Firebase Storage"]}
      />
      <SkillsSection
        title={il({ pl: "Frameworki:", en: "Frameworks:" })}
        names={["ASP.NET Core", "Entity Framework Core", "xUnit", "React", "Angular", "Tailwind CSS", "ExpressJS","OpenCV","PyTorch"]}
      />
      <SkillsSection
        title={il({ pl: "Narzędzia:", en: "Tools:" })}
        names={["Docker", "Docker Compose", "Git","Unity","Postman"]}
      />
      <SkillsSection
        title={il({ pl: "Inne:", en: "Other:" })}
        names={["JWT","OAuth2.0","Bledner","Figma"]}
      />
      </div>
      {/* <h1>Specjalizuję się w</h1>
      <h1>Mam też więdzę o</h1>
      <h1>Miałem też styczność z</h1> */}
    </MainTile>
  );
}

function SkillsSection({ title, names }: { title: string; names: string[] }) {
  return (
    <div className="flex flex-col break-inside-avoid-column">
      <h3 className="text-2xl font-bold pt-4">{title}</h3>
      {names.map((n, i) => {
        return (
          <p key={i} className="">
            {n}
          </p>
        );
      })}
    </div>
  );
}
