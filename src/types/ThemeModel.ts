export type ThemeType = 'light' | 'dark'

export default interface ThemeModel {
    backgroundColor: string,
    color: string,
    primary: string,
    secondary: string,
    textMute: string,
    hover: {
        backgroundColor: string,
        color: string
    }
}





