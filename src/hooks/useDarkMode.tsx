import React, {useState} from "react";
import ThemeModel, {ThemeType} from "../types/ThemeModel";

const useDarkMode = () : [ThemeType, () => void] =>  {
    const [theme, setTheme] = useState<ThemeType>((localStorage.getItem('theme') as ThemeType) || 'dark');

    const toggleTheme = () => {
        setTheme((theme : ThemeType) => {
            if (theme === 'light') {
                localStorage.setItem('theme', 'dark');
                return 'dark';
            }
            localStorage.setItem('theme', 'light');
            return 'light'
        })
    }

    return [theme, toggleTheme];
}

export default useDarkMode;