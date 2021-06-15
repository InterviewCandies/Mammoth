import React, {useState} from "react";
import ThemeModel, {ThemeType} from "../types/ThemeModel";

const useDarkMode = () : [ThemeType, () => void] =>  {
    const [theme, setTheme] = useState<ThemeType>('dark');

    const toggleTheme = () => {
        console.log('toggle')
        setTheme((theme : ThemeType) => {
            if (theme === 'light') return 'dark';
            return 'light'
        })
    }

    return [theme, toggleTheme];
}

export default useDarkMode;