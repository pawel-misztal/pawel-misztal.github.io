import { motion } from "motion/react";
import type React from "react";

interface MainTileProps {
  id: string;
  className?: string;
  tileTitle: string;
  children?: React.ReactNode;
}

export function MainTile({
  id,
  className = "pt-20 pb-20 px-4",
  tileTitle,
  children,
}: MainTileProps) {
  return (
    <div id={id} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          translateY: 100,
        }}
        whileInView={{
          opacity: 1,
          translateY: 0,
        }}
        viewport={{
          once: true,
          margin: "-100px",
        }}
        transition={{
          duration: 1,
          // delay: 0.4,
        }}
        className="mx-auto flex flex-col items-start justify-center w-full lg:max-w-5xl px-6 py-6 bg-zinc-900/10
         backdrop-blur-sm rounded-[3rem] border-2 border-zinc-700"
      >
        <h2 className="mx-4 my-2 text-5xl font-bold mb-8 uppercase">
          {tileTitle}
        </h2>
        {children}
      </motion.div>
    </div>
  );
}
