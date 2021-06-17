import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CSwitcher from "../common/CSwitcher";
import {useTranslation} from "react-i18next";
import CAccordition from "../common/CAccordition";

const useStyles = makeStyles(() =>({
    root: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
}) )


function DiscountFilter () {
    const {t} = useTranslation();
    const classes = useStyles();

    return <CAccordition title={'discount'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('haveADiscount')}</CLabel>
            </Grid>
            <Grid item>
                <CSwitcher></CSwitcher>
            </Grid>
        </Grid>
    </CAccordition>
}

export default DiscountFilter;