import type React from "react";
import { AddTranslations, UseTranslate } from "../utils/translator";

interface ExperienceCompanyProps {
  companyName: string;
  workTime: string;
  companyPosition: string;
  technologies: string[];
  children?: React.ReactNode;
}


AddTranslations([
  {id:"technologies",t:{pl:"Technologie: ",en:"Technologies: "}}
])

export default function ExperienceCompany({
  companyName,
  workTime,
  companyPosition,
  technologies = [],
  children,
}: ExperienceCompanyProps) {
  const {t} = UseTranslate();
  return (
    <div className="flex flex-row gap-4">
      <div className="min-w-0.5 bg-white mx-12 relative">
        <div className="w-3 h-3 rounded-full absolute bg-white top-1/2 -translate-y-1/2  -translate-x-1/2 left-1/2"></div>
      </div>
      <div className="flex flex-col min-w-[160px] max-w-[160px] justify-center">
        <h3 className="font-bold text-2xl w-full  ">
          {companyName}
        </h3>
        <p>{workTime}</p>
        <p className="font-bold">{companyPosition}</p>
      </div>

      <div className="py-10 flex flex-col gap-2">
        <hr/>
        {children}
        <hr/>
        <div>
          <h4 className="inline-block mr-2 font-medium">{t("technologies")}</h4>
          {technologies.map((val, i) => {
            return (
              <p className="inline-block mr-1" key={i}>
                {val},
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
