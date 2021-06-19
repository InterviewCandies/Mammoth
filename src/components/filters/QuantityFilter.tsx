import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import CAccordition from "../common/CAccordition";
import {useAppDispatch} from "../../hooks";
import {addFilter} from "../../features/filter";

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
    const dispatch = useAppDispatch();
    const [min, setMin] = useState<string>('0');
    const [max, setMax] = useState<string>('0');
    useEffect(() => {
        dispatch(addFilter({key: 'quantity', value: {min, max}}));
    }, [min, max])

    return  <CAccordition title={'quantity'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('from')}</CLabel>
            </Grid>
            <Grid item>
                <CInput type={"number"} value={min} onChange={event => setMin(event.target.value)}></CInput>
            </Grid>
            <Grid item>
                <CLabel>{t('to')}</CLabel>
            </Grid>
            <Grid>
                <CInput type={"number"} value={max} onChange={event => setMax(event.target.value)}></CInput>
            </Grid>
        </Grid>
    </CAccordition>
}

export default QuantityFilter;