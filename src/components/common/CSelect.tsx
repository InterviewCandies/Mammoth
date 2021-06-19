import styled, {ThemeContext} from "styled-components";
import {FormControl, makeStyles, MenuItem, OutlinedInput, Select, Theme} from "@material-ui/core";
import {CSSProperties, ReactElement, useContext} from "react";
import ThemeModel from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";
import CInput from "./CInput";

type Props = {
    theme: ThemeModel
}

interface SelectProps {
    value?: string | string[] | null,
    style?: CSSProperties,
    onChange: (value: any) => void,
    children: ReactElement[] | ReactElement,
    multiple?: boolean
}

const useOutlinedInputStyles = makeStyles<Theme, Props>(theme => ({
    root: {
        "& $notchedOutline": {
            border: 'none',
            outline: 'none',
            borderRadius: '4px',
        },
    },
    focused: {},
    notchedOutline: {}
}));

const useStyles = makeStyles<Theme, Props>(()=> ({
    root: {
        backgroundColor:  props => props.theme.input,
        color: props => props.theme.inputText,
        boxShadow: props => props.theme.boxShadowInside,
    },
    select: {
        color: props => props.theme.inputText,
        backgroundColor: props => props.theme.input,
        "& li": {
            "&:hover": {
                backgroundColor: props => props.theme.secondary,
                color: props => props.theme.text
            },
            "&:focus": {
                backgroundColor: props => props.theme.button,
                color: props => props.theme.buttonText
            }
        },
    },
    icon: {
        fill: props => props.theme.inputText
    }
}))

function CSelect({value, onChange, children, style, multiple} : SelectProps) {
    const theme = useContext(ThemeContext)
    const classes = useStyles({theme});
    const outlinedInputClasses = useOutlinedInputStyles({theme});
    return   <FormControl variant={"outlined"} size={"small"} style={style}>
        <Select  MenuProps={{ classes: { paper: classes.select },
                                disableScrollLock: true,
                               }}
                 inputProps={{
                     classes: {
                         icon: classes.icon,
                     },
                 }}
                 input={<OutlinedInput classes={outlinedInputClasses}></OutlinedInput>}
                 className={classes.root}
                 value={value}
                 onChange={e => onChange(e?.target?.value)}
                 multiple={multiple}
        >
            {children}
        </Select>
    </FormControl>
}
export default CSelect;