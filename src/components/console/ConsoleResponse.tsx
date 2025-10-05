interface ConsoleResponseProps {
  text: string;
}

export default function ConsoleResponse({ text }: ConsoleResponseProps) {
  // return <p>{text.split('\n').map((text,index,arr) => {
  //   return (
  //     <>
  //     {text.split('\t').map((text))}
  //     {index < arr.length && <br />}
  //     </>
  //   )
  // })}</p>;

  return <pre className="whitespace-pre-wrap">{text}</pre>
}
