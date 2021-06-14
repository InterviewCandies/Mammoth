import React from "react"
import {List, ListItem, makeStyles, Theme} from "@material-ui/core";
import EDIT_TYPES from "../../constants/editTypes";
import ThemeModel, {ThemeType} from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";

type Props = {
    theme: ThemeModel
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.buttonText,
        padding: "1rem 1.5rem",
        textTransform: "capitalize",
        borderRadius: "4px",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: props => props.theme.button,

        }
    },
    container: {
        padding : "1rem 0"
    }
}))

function EditMenu() {
    const [theme, ] = useDarkMode();
    const classes = useStyles({theme: theme == 'light' ? lightTheme : darkTheme})
    const items = Object.values(EDIT_TYPES);

    return<List component={"nav"}>
        {items.map((item : string) => <ListItem button key={item} classes={{root: classes.root}}>{item}</ListItem>)}
    </List>
}

export default EditMenu;