import { createContext, useContext, useEffect, useState } from "react";
import { UpdateUrlParam } from "./url";

export interface Translation {
  pl: string;
  en: string;
}

export const translations = new Map<string, Translation>([
 
]);

export function AddTranslations(newTranslations:{id:string,t:Translation }[])
{
  newTranslations.forEach((v) => {
    translations.set(v.id, v.t);
  })
}

export function Translate(id: string, lang: string | undefined = undefined) {
  if (!lang) lang = navigator.language;
  lang = lang.split("-")[0];
  const transl = translations.get(id);
  if (!transl) return `no translation for <${id}>`;
  const desiredTranslation = transl[lang as keyof Translation];
  if (!desiredTranslation || desiredTranslation === "")
    return `no translation for <${id}> with lang ${lang}`;
  return desiredTranslation;
}

interface ILanguageContext {
  currentLanguage:string;
  setCurrentLanguage:React.Dispatch<React.SetStateAction<string>>;
  t:(id:string) => string;
}

export const LanguageContext = createContext<ILanguageContext>({
  currentLanguage:navigator.language,
  setCurrentLanguage:() => {},
  t:Translate
});

interface LanguageProviderProps {
  children:React.ReactNode
}

function getLanguage() {
for(const [key,val] of new URLSearchParams(window.location.search))
      if(key === "lang")
        return val
    return navigator.language.split("-")[0];
}

export function LanguageProvider({children}:LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    // console.log("url", window.location)
    // console.log("params")
    let lang = getLanguage();
    if (lang !== "pl" && lang !== "en")
      lang = "en"

    return lang;
  });

  const handleSetCurrentLanguage = (newLang:React.SetStateAction<string>) => {
    if(typeof newLang === "function") {
      setCurrentLanguage((lang) => {
        const nl = newLang(lang);
        UpdateUrlParam("lang",nl);
        return nl;
      })
    } else {
      UpdateUrlParam("lang", newLang);
      setCurrentLanguage(newLang);
    }
  }


  return (
    <LanguageContext.Provider value={{currentLanguage,setCurrentLanguage:handleSetCurrentLanguage,t:Translate}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function UseTranslate() {
  const context = useContext(LanguageContext);

  if(!context) 
    console.log("useTranslation must be inside LanguagePrivder");

  const {currentLanguage, setCurrentLanguage, t} = context;

  const trans = (id:string) => {
    return Translate(id,currentLanguage)
  }

  const inlineTrans = (t:Translation) => {
    const desiredTranslation = t[currentLanguage as keyof Translation];
    if (!desiredTranslation || desiredTranslation === "")
      return `no translation for with lang ${currentLanguage}`;
    return desiredTranslation;
  }

  return {t:trans, il:inlineTrans,currentLanguage,setCurrentLanguage};
}