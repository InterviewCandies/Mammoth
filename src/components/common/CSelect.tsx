import styled from "styled-components";
import {FormControl, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import {ReactElement} from "react";
import ThemeModel from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";

type Props = {
    theme: ThemeModel
}

interface SelectProps {
    value?: string,
    onChange: (value: any) => void,
    children: ReactElement[]
}

const useStyles = makeStyles<Theme, Props>(()=> ({
    root: {
        backgroundColor:  props => props.theme.input,
        color: props => props.theme.buttonText,
    },
    select: {
        borderRadius: "5%",
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

function CSelect({value, onChange, children} : SelectProps) {
    const [theme, ] = useDarkMode();
    const classes = useStyles({theme : theme === 'light' ? lightTheme : darkTheme});

    return   <FormControl variant={"outlined"} size={"small"} style={{minWidth: "100px", width: "100%"}}>
        <Select  MenuProps={{ classes: { paper: classes.select },
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                getContentAnchorEl: null}}
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