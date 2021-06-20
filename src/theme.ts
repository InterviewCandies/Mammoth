import ThemeModel from "./types/ThemeModel";

export const lightTheme: ThemeModel = {
    body: '#f6f6f6',
    text: '#14171A',
    button: '#8b9dc3',
    input: '#fff',
    inputText: 'rgba(0, 0, 0, 0.45)',
    buttonText: '#fff',
    checkBox: '',
    toggleBorder: '#fff',
    primary: '#8b9dc3',
    gradient: '#fff',
    disabled: '#9e9e9e',
    secondary: '#f7f7f7',
    table: '#fff',
    paper: '#fff',
    success: '#6FCF97',
    error: '#EB5757',
    boxShadowInside: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset',
    boxShadowOutside: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;'
}

export const darkTheme: ThemeModel = {
    body: '#363333',
    text: '#fff',
    table: '#272121',
    button: '#414141',
    input: '#272121',
    inputText: 'rgba(255, 255, 255, 0.5)',
    buttonText: 'rgba(255, 255, 255, 0.5)',
    checkBox: '#f2f2f2',
    toggleBorder: '#6B8096',
    primary: '#8b9dc3',
    gradient: '#272121',
    disabled: '#9e9e9e',
    secondary: '#9e9e9e',
    paper: '#414141',
    success: '#6FCF97',
    error: '#EB5757',
    boxShadowInside: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    boxShadowOutside: '4px 4px 20px rgba(0, 0, 0, 0.25)'
}