import styled from "styled-components";

const CCheckbox = styled.input.attrs({type: 'checkbox'})`
    background-color: ${({theme}) => theme.checkBox};
    width: 22px;
    height: 22px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    outline: none;
    &:focus + &{
      background-color: ${({theme}) => theme.checkBox};
      color: #000
    }
`
export default CCheckbox