interface SelectButtonProps {
  id: string;
  text: string;
  isSelected: boolean;
  onClick: (id:string) => void
}
export default function SelectButton({
  id,
  text,
  isSelected,
  onClick
}: SelectButtonProps) {
  function handleClick() {
    onClick(id)
  }

  return (
    <button
      onClick={handleClick}
      className={
        "bg-zinc-800/50 px-4 py-2 rounded-xl shadow-sm shadow-zinc-950 " +
        "hover:bg-zinc-700/50 hover:shadow-md hover:scale-110 transition-all active:bg-zinc-800 active:shadow-xs flex flex-row gap-2 cursor-pointer " +
        (isSelected ? "outline-4 outline-zinc-400" : "outline-0")
      }
    >
      <h2 className="text-2xl font-medium text-white">{text}</h2>
    </button>
  );
}
