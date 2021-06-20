import styled from "styled-components";
import {ReactElement} from "react";

interface Props {
    active?: boolean
}

const CButton = styled.button<Props>`
    background-color: ${ props => props.active ? props.theme.input : props.theme.button};
    color: ${props => props.active ? props.theme.inputText : props.theme.buttonText};
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
    outline: none;
    border: none;
    box-shadow: ${({active, theme}) => active ? theme.boxShadowInside :  theme.boxShadowOutside} ;
    cursor: pointer;
    font-size: 0.95rem;
    letter-spacing: 1.25px;
    &:hover {
      opacity: 0.75;
    },
  "&svg" : {
    color: ${({theme}) => theme.buttonText} !important;
  }
}
`

export default CButton;