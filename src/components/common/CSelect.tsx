import styled, {ThemeContext} from "styled-components";
import {FormControl, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {CSSProperties, ReactElement, useContext} from "react";
import ThemeModel from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";

type Props = {
    theme: ThemeModel
}

interface SelectProps {
    value?: string,
    style?: CSSProperties,
    onChange: (value: any) => void,
    children: ReactElement[]
}

const useStyles = makeStyles<Theme, Props>(()=> ({
    root: {
        backgroundColor:  props => props.theme.input,
        color: props => props.theme.buttonText,
    },
    select: {
        color: props => props.theme.buttonText,
        backgroundColor: props => props.theme.input,
        "& li": {
            "&:hover": {
                backgroundColor: props => props.theme.button,
            },
            "&:focus": {
                backgroundColor: props => props.theme.body,
            }
        }
    },
    icon: {
        fill: props => props.theme.buttonText
    }
}))

function CSelect({value, onChange, children, style} : SelectProps) {
    const theme = useContext(ThemeContext)
    const classes = useStyles({theme});

    return   <FormControl variant={"outlined"} size={"small"} style={style}>
        <Select  MenuProps={{ classes: { paper: classes.select },
                                disableScrollLock: true,
                               }}
                 inputProps={{
                     classes: {
                         icon: classes.icon,
                     },
                 }}
                 className={classes.root}
                 value={value}
                 onChange={e => onChange(e?.target?.value)}
        >
            {children}
        </Select>
    </FormControl>
}
export default CSelect;