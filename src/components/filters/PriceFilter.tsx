import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "styled-components";
import CAccordition from "../common/CAccordition";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addFilter} from "../../features/filter";

const useStyles = makeStyles(() =>({
    root: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
}) )

function PriceFilter() {
    const {t} = useTranslation();
    const classes = useStyles();
    const [min, setMin] = useState<string>('0');
    const [max, setMax] = useState<string>('0');
    const dispatch = useAppDispatch();
    const isShow = useAppSelector(state => state.filter.checkbox['price'])

    useEffect(() => {
        dispatch(addFilter({key: 'price', value: {min, max}}));
    }, [min, max])

    return <CAccordition title={'price'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('from')}</CLabel>
            </Grid>
            <Grid item>
                <CInput type={"number"} value={min} onChange={e => setMin(e.target.value)}></CInput>
            </Grid>
            <Grid item>
                <CLabel>{t('to')}</CLabel>
            </Grid>
            <Grid>
                <CInput type={"number"} value={max} onChange={e => setMax(e.target.value)}></CInput>
            </Grid>
        </Grid>
    </CAccordition>
}

export default PriceFilter;