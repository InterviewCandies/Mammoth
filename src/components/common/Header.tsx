import React, {useContext, useEffect, useState} from "react"
import {Button, ButtonGroup, FormControl, Grid, makeStyles, MenuItem, Select, Theme} from "@material-ui/core";
import logo from "../../assets/logo.png";
import {Link, useHistory} from "react-router-dom"
import CButton from "./CButton"
import ThemeModel, {ThemeType} from "../../types/ThemeModel";
import useDarkMode from "../../hooks/useDarkMode";
import {darkTheme, lightTheme} from "../../theme";
import {dark} from "@material-ui/core/styles/createPalette";
import CSelect from "./CSelect";
import useLanguage from "../../hooks/useLanguage";
type Props = {
    theme: ThemeModel
}
const useStyles = makeStyles<Theme, Props>(theme => ({
    logo: {
        width: "5rem",
        height: "5rem"
    },
    link: {
        textDecoration: "none",
        color: props => props.theme.buttonText
    },
    right: {
        display: "flex",
        alightItems: "center",
        gap: '1rem'
    }
}))

function Header() {
    const [theme, toggleTheme] = useDarkMode();
    const [lang, setLanguage] = useLanguage();
    const classes = useStyles({theme: (theme === 'light' ? lightTheme: darkTheme)});
    const history = useHistory();
    const path : string = history.location.pathname;

    return <Grid container justify={"space-between"}>
        <Grid item>
            <ButtonGroup>
                <CButton active={path.includes('select')} onClick={()=> history.push('/select')}>
                    Select
                </CButton>
                <CButton active={path.includes('edit')} onClick={()=> history.push('/edit/category')}>
                    Edit
                </CButton>
            </ButtonGroup>
        </Grid>
        <Grid item className={classes.right}>
            <CSelect value={theme} onChange={() => toggleTheme()}>
                <MenuItem value={"light"}>light</MenuItem>
                <MenuItem value={"dark"}>dark</MenuItem>
            </CSelect>
            <CSelect value={lang} onChange={setLanguage}  style={{width: "160px"}}>
                <MenuItem value={"en"}>English</MenuItem>
                <MenuItem value={"vn"}>Vietnamese</MenuItem>
            </CSelect>
        </Grid>
    </Grid>
}

export default Header;