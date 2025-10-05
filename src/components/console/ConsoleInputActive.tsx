import { useState, type Ref } from "react";

interface ConsoleInputActiveProps {
  inputRef: Ref<HTMLInputElement> | undefined;
  onSubmit: (text:string) => void;
}

export default function ConsoleInputActive({
  inputRef,
  onSubmit,
}: ConsoleInputActiveProps) {
  const [inputText, setInputText] = useState("");

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputText(ev.target.value);
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLInputElement>)  {
    if (ev.key === 'Tab') {
      ev.preventDefault(); 
      console.log('Tab');
    }

     if (ev.key === 'Enter') {
      ev.preventDefault(); 
      onSubmit(inputText)
      setInputText("");
    }
  };


  return (
    <div className=" flex gap-2">
      <p>
        <span className="text-green-500/50">PawelMisztal@portfolio</span>:
        <span className="text-blue-500">~</span>$
      </p>
      <input
        type="text"
        spellCheck="false"
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="field-sizing-content outline-none"
      />
    </div>
  );
}
