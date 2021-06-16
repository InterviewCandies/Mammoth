import styled from "styled-components";

const CTextarea = styled.textarea`
    background-color: ${({theme})=> theme.input};
    color: ${({theme})=> theme.inputText};
    outline: none;
    border: none;
    width: 100%;
    border-radius: 4px;
    padding: 1rem 1rem;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

;
`
export default CTextarea;