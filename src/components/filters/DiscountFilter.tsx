import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import CSwitcher from "../common/CSwitcher";
import {useTranslation} from "react-i18next";
import CAccordition from "../common/CAccordition";
import {useAppDispatch} from "../../hooks";
import {addFilter} from "../../features/filter";
import {useEffect} from "react";

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
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addFilter({key:'discount', value: event.target.checked}))
    };

    useEffect(() => {
        dispatch(addFilter({key:'discount', value: true}))
    }, [])

    return <CAccordition title={'discount'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('haveADiscount')}</CLabel>
            </Grid>
            <Grid item>
                <CSwitcher defaultChecked={true} onChange={handleChange}></CSwitcher>
            </Grid>
        </Grid>
    </CAccordition>
}

export default DiscountFilter;