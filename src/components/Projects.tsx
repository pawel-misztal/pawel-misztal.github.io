import { AnimatePresence, motion } from "motion/react";
import ProjectTile from "./ProjectTile";
import SelectButton from "./SelectButton";
import { useEffect, useState } from "react";
import { MainTile } from "./MainTile";
import { PROJECTS, TAGS, type ProjectDesc } from "../data/ProjectList";

const SUPORTED_TAGS = [
  TAGS.all,
  TAGS.fullstack,
  TAGS.unity,
  TAGS.vr,
  TAGS.mechatronics,
  TAGS.ml,
  TAGS.university,
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(TAGS.fullstack);
  const [selectedProject, setSelectedProject] = useState<
    ProjectDesc | undefined
  >(undefined);

  function handleTagClick(id: string) {
    setSelectedTag(id);
  }

  function handleTileOnClick(title: string) {
    setSelectedProject(PROJECTS.find((v) => v.title === title));
    // console.log(title);
  }

  useEffect(() => {
    console.log(
      "selected proj",
      selectedProject?.title,
      `project-${selectedProject?.title}`
    );
  }, [selectedProject]);

  return (
    <>
      <MainTile id="projects" tileTitle="Projekty mówią za siebie">
        <p className=" p-4">Pokaż według kategorii:</p>
        <div className="flex flex-row gap-4 pb-8 flex-wrap">
          {SUPORTED_TAGS.map((v, i) => {
            return (
              <SelectButton
                id={v}
                key={i}
                text={v}
                isSelected={selectedTag === v}
                onClick={handleTagClick}
              />
            );
          })}
        </div>
        <motion.div
          className="w-full bg-zinc-900  grid grid-cols-1 md:grid-cols-2 gap-8 "
          layout
        >
          <AnimatePresence>
            {PROJECTS.filter((v) => {
              if (selectedTag === TAGS.all) return v;
              else return v.tags.includes(selectedTag);
            }).map((v, i) => {
              return (
                <ProjectTile key={i} proj={v} onClick={handleTileOnClick} />
              );
            })}
          </AnimatePresence>
        </motion.div>
      </MainTile>

      {/* <AnimatePresence>
      {selectedProject &&
      <motion.div layoutId={"project-"+selectedProject} className="w-[100px] h-[100px] fixed ">
        Sranie w banie
      </motion.div>}
    </AnimatePresence> */}

      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </>
  );
}

interface ProjectModalProps {
  selectedProject?: ProjectDesc;
  setSelectedProject: (project: ProjectDesc | undefined) => void;
}

function ProjectModal({
  selectedProject,
  setSelectedProject,
}: ProjectModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  function handleChangeIndex(increment: boolean) {
    if (!selectedProject?.imgSrc) return;
    const diff = increment ? 1 : -1;
    setImgIndex((val) => {
      val += diff;
      val = val % selectedProject.imgSrc!.length;
      return val;
    });
  }

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-zinc-950/50 bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(undefined)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            layoutId={`project-${selectedProject.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl w-full bg-zinc-900 rounded-3xl border-2 border-zinc-700 overflow-clip mx-4"
            layout
          >
            <div className="relative">
              <motion.img
                src={selectedProject.imgSrc?.[imgIndex]}
                // className="absolute h-auto object-cover w-full"
                className=""
              />
              {selectedProject.imgSrc && selectedProject.imgSrc.length > 1 && (
                <div className="absolute top-1/2 right-4">
                  <ImgButton onClick={() => handleChangeIndex(true)}>
                    ►
                  </ImgButton>
                </div>
              )}
              {selectedProject.imgSrc && selectedProject.imgSrc.length > 1 && (
                <div className="absolute top-1/2 left-4">
                  <ImgButton onClick={() => handleChangeIndex(false)}>
                    ◄
                  </ImgButton>
                </div>
              )}
            </div>
            <h2 className="text-3xl font-bold pt-4 uppercase px-6">
              {selectedProject.title}
            </h2>
            <p className="pt-2 px-4">
              {selectedProject.longDescription ??
                selectedProject.shortDescription}
            </p>
            <div className="px-4 pt-4 pb-6 flex flex-row flex-wrap gap-2 mt-auto">
              {selectedProject.technologies.map((p, i) => {
                return (
                  <p
                    className="px-2 py-1 bg-zinc-800 rounded-md text-sm text-nowrap"
                    key={i}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ImgButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

function ImgButton({ onClick, children }: ImgButtonProps) {
  return (
    <button
      className=" cursor-pointer text-zinc-900 bg-zinc-200 rounded-full 
                  text-2xl w-8 h-8 flex justify-center items-center shadow-sm shadow-zinc-900/50 hover:bg-zinc-100 
                  hover:shadow-xl transition-all active:shadow:md active:bg-zinc-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
