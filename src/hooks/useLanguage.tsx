import {useState} from "react";
import {LanguageType} from "../types";

const useLanguage = () : [LanguageType, (lang: LanguageType) => void] =>  {
    const [lang, setLang] = useState<LanguageType>('en');
    const setLanguage = (lang : LanguageType) => {
        setLang(lang);
    }

    return [lang, setLanguage]
}

export default useLanguage;