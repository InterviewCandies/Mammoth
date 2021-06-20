import {createGlobalStyle} from "styled-components";
import ThemeModel from "./types/ThemeModel";

export const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    body {
      font-family: 'Roboto', sans-serif;
      background-color: ${({theme}) => theme.body};
      color: ${({theme})=> theme.text};
      transition: all 0.25s linear;
      padding: 3rem;
    }
    
    *::-webkit-scrollbar {
      width: 0.75em;
      border-radius: 10px;
    }

    *::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    *::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.button};
      border-radius: 10px;
    }
`

