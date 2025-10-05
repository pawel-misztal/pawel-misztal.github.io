import type React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  scale,
  stagger,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
  type Variant,
  type Variants,
} from "motion/react";
import { Carret } from "./Carret";

interface TypeWriterProps extends HTMLMotionProps<"p"> {
  texts: string[];
}

const seqVariants: Variants = {
  hidden: {
    display: "hidden",
    opacity: 0,
  },
  visible: {
    display: "inline",
    opacity: 1,
    transition: {
      // staggerChildren:0.01,
      // delayChildren: stagger(0.5),
    },
  },
};

const letterVariatn: Variants = {
  hidden: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: (i)=>  ({
    display: "inline",
    opacity: 1,
    transition: { duration: 0, delay: i },
  }),
};

export function TypeWriter({ texts, ...props }: TypeWriterProps) {
  const [curIndex, setCurIndex] = useState(0);
  const [curStr, setCurStr] = useState(() => texts[curIndex]);

  useEffect(() => setCurStr(() => texts[curIndex]), [curIndex]);

  return (
    <div className="flex flex-row gap-1">
      <motion.p
        key={curStr}
        initial="hidden"
        animate="visible"
        onAnimationComplete={() => {
          setTimeout(() => {
          setCurIndex((i) => (i + 1) % texts.length);
          }, (2000));
        }}
        variants={seqVariants}
        {...props}
      >
        {curStr.split("").map((char, i) => (
          <motion.span key={`${char}-${i}`} variants={letterVariatn} custom={i * 0.2 + Math.random() * 0.2}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <Carret color={props.color!}/>
    </div>
  );
}


