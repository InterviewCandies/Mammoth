import styled from "styled-components";
import {ReactElement} from "react";

interface Props {
    active?: boolean
}

const CButton = styled.button<Props>`
    background-color: ${ props => props.active ? props.theme.input : props.theme.button};
    color: ${({theme})=> theme.buttonText};
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    outline: none;
    border: none;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-size: 0.95rem;
    letter-spacing: 1.25px;
    &:hover {
      opacity: 0.75;
    }
   &:focus {
     background-color: ${({theme}) => theme.input};
     box-shadow: inset 4px 4px 20px rgba(0, 0, 0, 0.25);
   }
}
`

export default CButton;