import {createGlobalStyle} from "styled-components";
import ThemeModel from "./types/ThemeModel";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      background-color: ${({theme}) => theme.body};
      color: ${({theme})=> theme.text};
      transition: all 0.25s linear;
      padding: 3rem;
    }
`