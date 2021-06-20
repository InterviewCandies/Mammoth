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
import ToggleTheme from "./ToggleTheme";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import {LanguageType} from "../../types";
import {useAppSelector} from "../../hooks";
import {stat} from "fs";
import {useModal} from "mui-modal-provider";
import CMessageDialog from "./CMessageDialog";

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

function Header({theme, toggleTheme} : {theme: ThemeType, toggleTheme: ()=> void}) {
    const [lang, setLanguage] = useLanguage();
    const classes = useStyles({theme: (theme === 'light' ? lightTheme: darkTheme)});
    const history = useHistory();
    const path : string = history.location.pathname;
    const {t} = useTranslation();
    const {showModal} = useModal();
    const selectedProducts = useAppSelector(state => state.products.selection);

    const handleChangeLanguage = (value : LanguageType) => {
        setLanguage(value);
        i18n.changeLanguage(value)
    }

    const handleClickEdit = () => {
        if (selectedProducts.length)
            history.push('/edit/category');
        else {
            const modal = showModal(CMessageDialog, {
                message: t('failedByEmptyProducts'),
                onOK: () => {
                    modal.hide();
                }
            })
        }
    }

    return <Grid container justify={"space-between"}>
        <Grid item>
            <ButtonGroup style={{position: "fixed"}}>
                <CButton active={path.includes('select')} onClick={()=> history.push('/select')}>
                    {t('select')}
                </CButton>
                <CButton active={path.includes('edit')} onClick={handleClickEdit}>
                    {t('edit')}
                </CButton>
            </ButtonGroup>
        </Grid>
        <Grid item className={classes.right}>
            <ToggleTheme theme={theme} toggleTheme={toggleTheme}></ToggleTheme>
            <CSelect value={lang} onChange={handleChangeLanguage}  style={{width: "160px"}}>
                <MenuItem value={"en"}>{t('english')}</MenuItem>
                <MenuItem value={"vn"}>{t('vietnamese')}</MenuItem>
            </CSelect>
        </Grid>
    </Grid>
}

export default Header;