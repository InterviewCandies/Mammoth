import CAccordition from "../common/CAccordition";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme)=>({
    checkbox: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    },
}))

function OptionFilter() {
    const {t} = useTranslation();
    const classes = useStyles();

    return <CAccordition title={'options'}>
        <>
            <Grid container item xs={12}  spacing={5}>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('red')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('blue')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('green')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('yellow')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('black')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('white')}</CLabel>
                </Grid>
            </Grid>
            <Grid container item xs={12}  spacing={5}>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('cotton')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('jean')}</CLabel>
                </Grid>
                <Grid item className={classes.checkbox}>
                    <CCheckbox></CCheckbox>
                    <CLabel>{t('leather')}</CLabel>
                </Grid>
            </Grid>
        </>
    </CAccordition>
}

export default OptionFilter;