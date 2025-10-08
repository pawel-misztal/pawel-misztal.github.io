import { AnimatePresence, invariant, motion, useInView } from "motion/react";
import { text } from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { dateDiff } from "../utils/date";

interface AnimatedCounterProps {
  value: number;
  transitionTime: number;
  height: number;
}
function AnimatedCounter({
  value,
  transitionTime,
  height,
}: AnimatedCounterProps) {
  const container = useRef(null);

  const textRef = useRef<HTMLHeadingElement>(null);
  const [size, setSize] = useState<{ x: number; y: number }>();

  useEffect(() => {
    if (!textRef.current) return;
    // console.log("make resizer")
    const observer = new ResizeObserver((entries) => {
      for (let e of entries) {
        const rect = e.contentRect;
        const lineHeight = (e.target.computedStyleMap().get("line-height") as any).value;
        console.log("line height", lineHeight)
        setSize({ x: rect.width, y: height * lineHeight });
        // console.log("resize to ", e,{x:rect.width, y:rect.height})
        //this line is important, because before unmount obj, its size is set to 0,0 due to opacity:0 on framer
        observer.unobserve(e.target);
      }
    });

    observer.observe(textRef.current);

    return () => observer.disconnect();
  }, [value]);
  return (
    <div
      ref={container}
      className="relative overflow-clip  min-w-1 min-h-1"
      style={{
        width: size?.x,
        height: size?.y,
      }}
    >
      <AnimatePresence>
        <motion.h2
          key={value}
          ref={textRef}
          style={{
            fontSize:height
          }}
          className={`absolute text-white font-bold`} 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: transitionTime }}
        >
          {value}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default function ExperienceCounter() {
  const animTime = 0.2;
  const heigth = 80;
  const container = useRef(null);
  const inView = useInView(container, { once: true, margin: "-100px"});
  const [counterProfessionalYears, setCounterProffesionalYears] = useState(0);
  const [counterCodingYears, setCounterCodingYears] = useState(0);

  const [years,setYears] = useState<{coding:number,proff:number}>({coding:0,proff:0});

  useEffect(() =>{
    // unity
    // const startCodingDate = new Date(2020,1);
    // 
    const startCodingDate = new Date(2018,1);
    const firstJobDate = new Date(2021,3);
    const now = new Date();
    // console.log("years coding",dateDiff(now,startCodingDate))
    // console.log("years proff",dateDiff(now,firstJobDate))
    const diffCoding = dateDiff(now,startCodingDate);
    const diffProffesional = dateDiff(now,firstJobDate);
    const codingYears = diffCoding[2] + (diffCoding[1] > 6 ? 1 : 0);
    const proffesionalYears = diffProffesional[2] + (diffProffesional[1] > 6 ? 1 : 0);
    setYears({coding:codingYears,proff:proffesionalYears});
  },[])

  const updateProffesional = () => {
    if (counterProfessionalYears >= years.proff)
      return;
    const timeer = setTimeout(() => {
       setCounterProffesionalYears((val) => val + 1);
    }, animTime * 1000);
    return () => clearTimeout(timeer);
  };

  const updateCoding = () => {
    if (counterCodingYears >= years.coding)
      return;
    const timeer = setTimeout(() => {
       setCounterCodingYears((val) => val + 1);
    }, animTime * 1000);
    return () => clearTimeout(timeer);
  };

  useEffect(() => {
    if (!inView) return;

    const retProf = updateProffesional();
    const retCoding = updateCoding();
    return () => {
      retProf?.();
      retCoding?.();
    };
  }, [counterProfessionalYears, counterCodingYears, inView, years]);

  return (
    <>
      <div ref={container} className="flex flex-col md:flex-row w-full items-center justify-center gap-20 my-8 text-3xl ">
        {/* <AnimatedCounter transitionTime={0.2} height={80}  */}
        <div className="flex flex-col justify-center items-center">
          <h3>Lat programowania:</h3>
        <AnimatedCounter transitionTime={animTime} height={heigth} value={counterCodingYears} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3>Lat zawodowo:</h3>
        <AnimatedCounter transitionTime={animTime} height={heigth} value={counterProfessionalYears} />
        </div>
      </div>
    </>
  );
}
