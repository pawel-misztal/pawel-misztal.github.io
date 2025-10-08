import { motion } from "motion/react";
import { useEffect } from "react";
import type { ProjectDesc } from "../data/ProjectList";
interface ProjectTileProps {
  proj: ProjectDesc
  onClick: (title: string) => void;
}

export default function ProjectTile({
  proj,
  onClick,
}: ProjectTileProps) {
  useEffect(() => {
    console.log("adding proj", "project-" + proj.title);
  }, []);
  const generateId = () => "project-" + proj.title;
  return (
    <motion.div layout layoutId={generateId()} key={proj.title} >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={() => onClick(proj.title)}
        className="bg-zinc-900 rounded-3xl h-full border-zinc-700 border-2 flex flex-col hover:scale-105 hover:shadow-xl shadow-black transition-all hover:cursor-pointer hover:z-50 relative overflow-hidden"
      >
        <motion.img src={proj.imgSrc?.[0]} className="h-[240px] object-cover" />
        <h3 className="text-2xl font-bold pt-4 px-6 uppercase">{proj.title}</h3>
        <p className="py-2 px-4">{proj.shortDescription}</p>
        <div className="px-4 pt-2 pb-4 flex flex-row flex-wrap gap-2 mt-auto">{proj.technologies.map((p,i) => {
          return <p className="px-2 py-1 bg-zinc-800 rounded-md text-sm text-nowrap" key={i}>{p}</p>
        })}</div>
      </motion.div>
    </motion.div>
  );
}
