interface ConsoleFilledInputProps {
  text: string;
}

export default function ConsoleFilledInput({ text }: ConsoleFilledInputProps) {
  return (
    <div className="flex gap-2">
      <p>
        <span className="text-green-500/50">PawelMisztal@portfolio</span>:
        <span className="text-blue-500">~</span>$
      </p>
      <p className="text-white">{text}</p>
    </div>
  );
}
