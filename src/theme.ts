import ThemeModel from "./types/ThemeModel";

export const lightTheme: ThemeModel = {
    body: '#f1f1f1',
    text: '#14171A',
    button: '#8b9dc3',
    input: '#dfe3ee',
    inputText: 'rgba(0, 0, 0, 0.45)',
    buttonText: '#fff',
    checkBox: '',
    toggleBorder: '#fff',
    primary: '#8b9dc3',
    gradient: 'linear-gradient(#39598A, #79D7ED)'
}

export const darkTheme: ThemeModel = {
    body: '#363333',
    text: '#fff',
    button: '#414141',
    input: '#272121',
    inputText: 'rgba(255, 255, 255, 0.5)',
    buttonText: 'rgba(255, 255, 255, 0.5)',
    checkBox: '#f2f2f2',
    toggleBorder: '#6B8096',
    primary: '#8b9dc3',
    gradient: 'linear-gradient(#091236, #1E215D)',
}