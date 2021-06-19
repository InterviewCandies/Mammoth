import styled from "styled-components";
import ThemeModel from "../../types/ThemeModel";

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
        box-shadow: ${({theme}) => theme.boxShadowInside};
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