import React from "react"
import { List, ListItem, makeStyles, Theme} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom"
import EDIT_TYPES from "../../constants/editTypes";
import ThemeModel, {ThemeType} from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";

type Props = {
    theme: ThemeModel,
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.buttonText,
        padding: "0.75rem 1rem",
        textTransform: "capitalize",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: props => props.theme.button,

        },
        "&:focus": {
            backgroundColor: props => props.theme.button,
        }
    },
    container: {
        padding : "1rem 0"
    }
}))

function EditMenu() {
    const [theme, ] = useDarkMode();
    const mode = theme == 'light' ? lightTheme : darkTheme;
    const classes = useStyles({theme: mode})
    const items = Object.values(EDIT_TYPES);
    const history = useHistory();
    const path = history.location.pathname;

    return <List component={"nav"}>
        {items.map((item : string) =>
            <ListItem  button key={item}
                       classes={{root: classes.root}}
                       style={path.includes(item) ? {backgroundColor: mode.button} : {}}
                       onClick={() => history.push(`/edit/${item}`)}>
                {item}
            </ListItem>)}
    </List>
}

export default EditMenu;