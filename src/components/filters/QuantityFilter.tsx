import {useTranslation} from "react-i18next";
import {useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import CAccordition from "../common/CAccordition";

const useStyles = makeStyles(() =>({
    root: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
}) )

function QuantityFilter() {
    const {t} = useTranslation();
    const classes = useStyles();

    return  <CAccordition title={'quantity'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('from')}</CLabel>
            </Grid>
            <Grid item>
                <CInput type={"number"}></CInput>
            </Grid>
            <Grid item>
                <CLabel>{t('to')}</CLabel>
            </Grid>
            <Grid>
                <CInput type={"number"}></CInput>
            </Grid>
        </Grid>
    </CAccordition>
}

export default QuantityFilter;