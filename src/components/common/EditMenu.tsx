import React, {useContext} from "react"
import { List, ListItem, makeStyles, Theme, useTheme} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom"
import EDIT_TYPES from "../../constants/editTypes";
import ThemeModel, {ThemeType} from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";
import {ThemeContext} from "styled-components";
import {useTranslation} from "react-i18next";

type Props = {
    theme: ThemeModel,
}

const useStyles = makeStyles<Theme, Props>((theme) => ({
    root: {
        backgroundColor: props => props.theme.input,
        color: props => props.theme.inputText,
        padding: "0.75rem 1.5rem",
        textTransform: "capitalize",
        fontWeight: 600,
        width: '100%',
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
        boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
        position: "fixed",
        borderRadius: '4px',
        minWidth: "300px",
        backgroundColor: props => props.theme.input,
        padding: 0
    }
}))

function EditMenu() {
    const theme = useContext(ThemeContext);
    const muiTheme = useTheme();
    const classes = useStyles({theme})
    const items = Object.values(EDIT_TYPES);
    const history = useHistory();
    const path = history.location.pathname;
    const {t} = useTranslation();

    return <List component={"nav"}  className={classes.container}>
        {items.map((item : string) =>
            <ListItem  button key={item}
                       classes={{root: classes.root}}
                       style={path.includes(item) ? {backgroundColor: theme.button, color: theme.buttonText} : {}}
                       onClick={() => history.push(`/edit/${item}`)}>
                {t(item)}
            </ListItem>)}
    </List>
}

export default EditMenu;