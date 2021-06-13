import React, {ReactElement, useState} from "react"

export interface AppContextModel {
    theme: 'light' | 'dark',
    lang: 'en' | 'vn',
    setTheme : () => void,
    setLang : () => void
}

export const AppContext = React.createContext<AppContextModel>({
    theme: 'light',
    lang: 'en',
    setTheme : () => {
        console.log('default')
    },
    setLang: ()=> {}
})

const AppProvider : React.FC = ({children}) => {
    const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');
    const [lang, setCurrentLang]  = useState<'en' | 'vn'>('en');

    const setTheme = () => {
        console.log(theme)
        return setCurrentTheme(theme  => {
            if (theme === 'light') return 'dark';
            return 'light';
        })
    }

    const setLang = () => {
        return setCurrentLang( lang => {
            if (lang === 'en') return 'vn';
            return 'vn'
        })
    }
    return  <AppContext.Provider value={{ theme, setTheme, lang, setLang }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider