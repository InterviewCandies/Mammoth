import styled from "styled-components";

const CInput = styled.input`
    background-color: ${({theme}) => theme.input};
    padding: 0.75rem;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 4px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({theme}) => theme.buttonText};
`
export default CInput;