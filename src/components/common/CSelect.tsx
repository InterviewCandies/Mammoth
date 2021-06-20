import styled, {ThemeContext} from "styled-components";
import {Button, FormControl, ListItem, makeStyles, MenuItem, OutlinedInput, Select, Theme} from "@material-ui/core";
import React, {CSSProperties, ReactElement, useContext} from "react";
import ThemeModel from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";
import CInput from "./CInput";
import {AddCircle} from "@material-ui/icons";

type Props = {
    theme: ThemeModel
}

interface SelectProps {
    value?: string | string[] | null,
    style?: CSSProperties,
    onChange: (value: any) => void,
    children: ReactElement[] | ReactElement,
    multiple?: boolean,
    allowAdd?: boolean,
    onAdd?: () => void;
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
    },
    addButt: {
        width: "100%",
        color: props => props.theme.inputText,
        textTransform: "none",
        padding: "1rem"
    }
}))

function CSelect({value, onChange, children, style, multiple, allowAdd, onAdd} : SelectProps) {
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
            {allowAdd && <Button variant={"text"} className={classes.addButt} onClick={onAdd}>
                <AddCircle style={{marginRight: '0.5rem', color: theme.inputText}}></AddCircle>
                Add
            </Button>}
        </Select>
    </FormControl>
}
export default CSelect;