import type React from "react";

interface EducationPlaceProps {
  where: string;
  studyTime: string;
  title: string;
  finalGrade:string;
  children?: React.ReactNode;
}
export default function EducationPlace({
  where: companyName,
  studyTime: workTime,
  title: companyPosition,
  finalGrade,
  children,
}: EducationPlaceProps) {
  return (
    <div className="flex flex-row gap-4 w-full justify-start">
      <div className="min-w-0.5 bg-white mx-12 relative">
        <div className="w-3 h-3 rounded-full absolute bg-white top-1/2 -translate-y-1/2  -translate-x-1/2 left-1/2"></div>
      </div>
      <div className="flex flex-col w-full justify-center py-6">
        <div className="flex flex-row gap-12 w-full justify-start items-baseline">
          <h3 className="font-bold text-3xl  uppercase">{companyName}</h3>
          <p className="font-bold text-xl">{companyPosition}</p>
        </div>
        <p>{workTime}</p>
        <p className="font-bold">Ocena końcowa: {finalGrade}</p>
      </div>

      <div className="py-10 flex flex-col gap-2">{children}</div>
    </div>
  );
}
