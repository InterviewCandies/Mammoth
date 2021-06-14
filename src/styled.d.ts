import {} from 'styled-components';
import ThemeModel from "./types/ThemeModel";
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeModel {} // extends the global DefaultTheme with our ThemeType.
}