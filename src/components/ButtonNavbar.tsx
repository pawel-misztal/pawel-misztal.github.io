import type React from "react";

interface ButtonNavbarProps {
  href: string;
  text: string;
  child?:React.ReactNode;
}
export function ButtonNavbar({ href, text, child }: ButtonNavbarProps) {
  return <a href={href} className="bg-zinc-800/50 px-4 py-2 rounded-xl shadow-sm shadow-zinc-800 
  hover:bg-zinc-700/50 hover:shadow-md transition-all active:bg-zinc-800 active:shadow-xs flex flex-row gap-2">
    <h2 className="text-2xl font-medium text-white">{text}</h2>
    {child}
  </a>;
}
