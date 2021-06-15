import styled from "styled-components";

/*const CCheckbox = styled.input.attrs({type: 'checkbox'})`
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
*/
const Label = styled.label`
    input {
      display: none;
    }
    span {
        height: 1.25rem;
        width: 1.25rem;
        border: 1px solid grey;
        display: inline-block;
        position: relative;
        background-color: ${({theme}) => theme.checkBox};
        border-radius: 4px;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    [type=checkbox]:checked + span:before {
        content: '\\2714';
        position: absolute;
        top: -4px;
        left: 2px;
        color: #000;
    }
    [type=checkbox]:disabled + span {
        background-color: ${({theme}) => theme.disabled};
    }
`

function CCheckbox({checked, onChange, disabled} : {checked?: boolean, onChange?: ()=>void, disabled? : boolean}) {
    return <Label>
            <input type='checkbox' checked={checked} onChange={onChange} disabled={disabled}/>
                <span></span>
        </Label>
}
export default CCheckbox