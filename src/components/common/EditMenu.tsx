import React, {useContext} from "react"
import { List, ListItem, makeStyles, Theme, useTheme} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom"
import EDIT_TYPES from "../../constants/editTypes";
import ThemeModel, {ThemeType} from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";
import {ThemeContext} from "styled-components";

type Props = {
    theme: ThemeModel,
}

const useStyles = makeStyles<Theme, Props>(() => ({
    root: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.inputText,
        padding: "0.75rem 1.5rem",
        textTransform: "capitalize",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: props => props.theme.button,
            color: props => props.theme.buttonText,
        },
        "&:focus": {
            backgroundColor: props => props.theme.button,
            color: props => props.theme.buttonText,
        }
    },
    container: {
        padding : "1rem 0"
    }
}))

function EditMenu() {
    const theme = useContext(ThemeContext);
    const muiTheme = useTheme();
    const classes = useStyles({theme})
    const items = Object.values(EDIT_TYPES);
    const history = useHistory();
    const path = history.location.pathname;

    return <List component={"nav"}  style={{position: "fixed", minWidth: '350px'}}>
        {items.map((item : string) =>
            <ListItem  button key={item}
                       classes={{root: classes.root}}
                       style={path.includes(item) ? {backgroundColor: theme.button, color: theme.buttonText} : {}}
                       onClick={() => history.push(`/edit/${item}`)}>
                {item}
            </ListItem>)}
    </List>
}

export default EditMenu;