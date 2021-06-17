import {useTranslation} from "react-i18next";
import CAccordition from "../common/CAccordition";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CLabel from "../common/CLabel";
import CSwitcher from "../common/CSwitcher";

const useStyles = makeStyles(() =>({
    root: {
        "& > *" : {
            marginRight: "0.75rem"
        }
    },
}) )

function ImageFilter() {
    const {t} = useTranslation();
    const classes = useStyles();

    return <CAccordition title={'discount'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('haveAnImage')}</CLabel>
            </Grid>
            <Grid item>
                <CSwitcher></CSwitcher>
            </Grid>
        </Grid>
    </CAccordition>
}

export default ImageFilter;