import { useState, type Ref } from "react";

interface ConsoleInputActiveProps {
  inputRef: Ref<HTMLInputElement> | undefined;
  onSubmit: (text: string) => void;
}

export default function ConsoleInputActive({
  inputRef,
  onSubmit,
}: ConsoleInputActiveProps) {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setInputText(ev.target.value);
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    // console.log(ev.key);
    if (ev.key === "Tab") {
      ev.preventDefault();
      console.log("Tab");
    }

    if (ev.key === "Enter") {
      ev.preventDefault();
      onSubmit(inputText);
      setHistory((prevHistory) => {
        const newHistory = [inputText, ...prevHistory];
        return newHistory;
      });
      setHistoryIndex(-1);
      setInputText("");
    }

    if (ev.key === "ArrowUp") {
    }

    if (ev.key === "ArrowDown") {
      setHistoryIndex((index) => {
        if (historyIndex === -1 || historyIndex === 0) index = 0;
        else index = historyIndex - 1;
        
        // setInputText()
        return index;
      });
    }
  }

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
