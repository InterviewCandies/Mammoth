import ThemeModel, {ThemeType} from "../types/ThemeModel";

const THEME: Record<ThemeType, ThemeModel>= {
    'light' : {
        backgroundColor: '#cecece',
        color: '#000',
        primary: '#fff',
        secondary: '#fff',
        textMute: '#000',
        hover:  {
            backgroundColor: '',
            color: ''
        }
    },
    'dark' : {
        backgroundColor: '#363333',
        color: '#fff',
        primary: '#272121',
        secondary: '#414141',
        textMute: 'rgba(255,255,255, 0.5)',
        hover:  {
            backgroundColor: '#272121',
            color: 'rgba(255,255,255, 0.5)'
        }
    }
}

export default THEME;