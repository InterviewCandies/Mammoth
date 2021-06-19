import styled from "styled-components";
import {lightTheme} from "../../theme";

const CInput = styled.input`
    background-color: ${({theme}) => theme.input};
    padding: 0.75rem;
    outline: none;
    border: none;
    max-height: 3rem;
    border-radius: 4px;
    box-shadow: ${({theme}) => theme.boxShadowInside};
    color: ${({theme}) => theme.inputText};
    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        border-radius: 4px;
        margin-right: 2px;
        opacity: 0.6;
        filter: ${({theme}) => theme.text === '#fff' ? `invert(1)` : `invert(0)`};
    }
`
export default CInput;