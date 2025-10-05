import {motion} from "motion/react";

interface CarretProps {
  color:string
}

export function Carret({color}:CarretProps) {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop"
    }}

    className="h-6 w-0.5 bg-white inline"
    style={{ backgroundColor: color }}
  ></motion.div>;
}