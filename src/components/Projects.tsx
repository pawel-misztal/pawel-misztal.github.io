import { AnimatePresence, motion } from "motion/react";
import ProjectTile from "./ProjectTile";
import SelectButton from "./SelectButton";
import { useEffect, useState } from "react";
import { MainTile } from "./MainTile";
import { PROJECTS, TAGS, type ProjectDesc } from "../data/ProjectList";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AddTranslations, UseTranslate, type Translation } from "../utils/translator";

const SUPORTED_TAGS = [
  TAGS.all,
  TAGS.fullstack,
  TAGS.unity,
  TAGS.vr,
  TAGS.mechatronics,
  TAGS.ml,
  TAGS.university,
];

AddTranslations([
  {id:"projectTitle",t:{pl:"Moje prywatne projekty", en:"My private projects"}},
  {id:"categories",t:{pl:"Pokaż według kategorii:", en:"Show by category:"}},
  {id:TAGS.all,t:{pl:"Wszystkie", en:"All"}},
  {id:TAGS.fullstack,t:{pl:"Full-Stack", en:"Full-Stack"}},
  {id:TAGS.unity,t:{pl:"Unity", en:"Unity"}},
  {id:TAGS.vr,t:{pl:"VR", en:"VR"}},
  {id:TAGS.mechatronics,t:{pl:"Mechatronka", en:"Mechatronics"}},
  {id:TAGS.ml,t:{pl:"AI/ML", en:"AI/ML"}},
  {id:TAGS.university,t:{pl:"Studia", en:"Studies"}},
])

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState(TAGS.all);
  const [selectedProject, setSelectedProject] = useState<
    ProjectDesc | undefined
  >(undefined);

  const {t} = UseTranslate();

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
      <MainTile id="projects" tileTitle={t("projectTitle")}>
        <p className=" p-4">{t("categories")}</p>
        <div className="flex flex-row gap-4 pb-8 flex-wrap">
          {SUPORTED_TAGS.map((v, i) => {
            return (
              <SelectButton
                id={v}
                key={i}
                text={t(v)}
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
      val += selectedProject.imgSrc!.length + diff;
      val = val % selectedProject.imgSrc!.length;
      return val;
    });
  }

  useEffect(()=>{
    if(selectedProject) {
      document.body.style.overflowY = "hidden"
    }
    else{
      document.body.style.overflowY = "unset"
    }

    return () => {document.body.style.overflowY = "unset"}
  },[selectedProject])

  useEffect(()=>{
    setImgIndex(0);
  },[selectedProject])

  const {t,il} = UseTranslate();
    function getString(o:string|Translation) {
      if (typeof o === "string")
        return o
      else
        return il(o);
  }

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-zinc-950/50 bg-opacity-90 flex items-start pt-20  justify-center z-50 backdrop-blur-xs overflow-y-auto"
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
            className="max-w-3xl  w-full bg-zinc-900 rounded-3xl border-2 border-zinc-700 overflow-clip mx-4 flex flex-col my-10"
            layout
          >
            <div className="relative">
              { selectedProject.imgSrc?.[imgIndex].includes("http") &&
                <iframe 
                  src={selectedProject.imgSrc?.[imgIndex]}
                  className="max-h-[500px] object-cover w-full relative h-[400px]"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              }
              { !selectedProject.imgSrc?.[imgIndex].includes("http") &&
              <motion.img
                src={selectedProject.imgSrc?.[imgIndex]}
                // className=" h-full object-cover w-full "
                className="max-h-[500px] object-cover w-full relative"
              />}
              {selectedProject.imgSrc && selectedProject.imgSrc.length > 1 && (
                <div className="absolute top-1/2 right-4">
                  <ImgButton onClick={() => handleChangeIndex(true)}>
                    <FaArrowRight />
                  </ImgButton>
                </div>
              )}
              {selectedProject.imgSrc && selectedProject.imgSrc.length > 1 && (
                <div className="absolute top-1/2 left-4">
                  <ImgButton onClick={() => handleChangeIndex(false)}>
                    <FaArrowLeft />
                  </ImgButton>
                </div>
              )}
              <button
                className="absolute top-4 right-4 cursor-pointer text-zinc-900 bg-zinc-200 rounded-full 
                  text-2xl w-8 h-8 flex justify-center items-center shadow-sm shadow-zinc-900/50 hover:bg-zinc-100 
                  hover:shadow-xl transition-all active:shadow:md active:bg-zinc-300"
                onClick={() => setSelectedProject(undefined)}
              >
                <IoClose className="fill-zinc-900" />
              </button>
            </div>
            <div className=" ">
              <h2 className="text-3xl font-bold pt-4 uppercase px-6">
                {t(selectedProject.title)}
              </h2>
              <pre className="pt-2 px-4 whitespace-pre-wrap">
                {selectedProject.longDescription ? getString(selectedProject.longDescription) :
                  getString(selectedProject.shortDescription)}
              </pre>
              {selectedProject.url && (
                <div className="mx-4 mb-2 mt-4 flex flex-row-reverse gap-4">
                  {selectedProject.url.map((u, i) => {
                    return (
                      <div className="flex flex-row-reverse ">
                        <a
                          href={u.link}
                          target="_blank"
                          className="flex gap-1 bg-zinc-800 px-4 py-2 rounded-xl shadow-md shadow-zinc-950
                   hover:bg-zinc-700 hover:shadow-xl  
                   active:bg-zinc-900 active:shadow-xs 
                   transition-all"
                        >
                          {u.description}
                          <FaArrowUpRightFromSquare className="h-full" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
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
