import {useTranslation} from "react-i18next";
import {ReactElement, useContext, useState} from "react";
import {ThemeContext} from "styled-components";
import {Collapse, Grid} from "@material-ui/core";
import CCheckbox from "./CCheckbox";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setCheckbox} from "../../features/filter";

function CAccordition({title, children} : {title: string, children: ReactElement}) {
    const {t} = useTranslation();
    const theme = useContext(ThemeContext);
    const isShow = useAppSelector(state => state.filter.checkbox[title]);
    const dispatch = useAppDispatch();

    return  <Grid container spacing={2}>
        <Grid container item xs={12} justify={"space-between"}>
            <h4 style={{color: theme.text, margin: 0}}>{t(title)}</h4>
            <CCheckbox checked={isShow} onChange={() => dispatch(setCheckbox({key: title, value: !isShow}))}></CCheckbox>
        </Grid>
        <Grid item xs={12}>
            <Collapse in={isShow}>
                {isShow && children}
            </Collapse>
        </Grid>
    </Grid>
}

export default CAccordition;