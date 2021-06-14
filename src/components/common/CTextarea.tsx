import styled from "styled-components";

const CTextarea = styled.textarea`
    background-color: ${({theme})=> theme.input};
    color: ${({theme})=> theme.buttonText};
    outline: none;
    border: none;
    width: 100%;
    padding: 1rem 0.5rem;
;
`
export default CTextarea;