import CAccordition from "../common/CAccordition";
import {Grid, makeStyles} from "@material-ui/core";
import CLabel from "../common/CLabel";
import CInput from "../common/CInput";
import {useTranslation} from "react-i18next";

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

    return <CAccordition title={'uploadDate'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('from')}</CLabel>
            </Grid>
            <Grid item>
                <CInput type={"date"}></CInput>
            </Grid>
            <Grid item>
                <CLabel>{t('to')}</CLabel>
            </Grid>
            <Grid>
                <CInput type={"date"}></CInput>
            </Grid>
        </Grid>
    </CAccordition>
}

export default DateFilter;