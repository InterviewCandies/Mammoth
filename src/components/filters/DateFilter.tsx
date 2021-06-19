import CAccordition from "../common/CAccordition";
import {Grid, makeStyles} from "@material-ui/core";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hooks";
import {useEffect, useState} from "react";
import {addFilter} from "../../features/filter";

const useStyles = makeStyles(() =>({
    root: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
}) )

function DateFilter() {
    const {t} = useTranslation();
    const classes = useStyles();
    const [start, setStart] = useState<string>('');
    const [end, setEnd] = useState<string>('');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addFilter({key: 'uploadedDate', value: {start, end}}));
    }, [start, end])

    return <CAccordition title={'uploadedDate'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('from')}</CLabel>
            </Grid>
            <Grid item>
                <CInput type={"date"} onChange={e => setStart(e.target.value)}></CInput>
            </Grid>
            <Grid item>
                <CLabel>{t('to')}</CLabel>
            </Grid>
            <Grid>
                <CInput type={"date"} onChange={e => setEnd(e.target.value)}></CInput>
            </Grid>
        </Grid>
    </CAccordition>
}

export default DateFilter;