import {useTranslation} from "react-i18next";
import CAccordition from "../common/CAccordition";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CLabel from "../common/CLabel";
import CSwitcher from "../common/CSwitcher";
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

function ImageFilter() {
    const {t} = useTranslation();
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addFilter({key: 'image', value: event.target.checked}))
    };

    useEffect(() => {
        dispatch(addFilter({key: 'image', value: true}))
    }, [])

    return <CAccordition title={'image'}>
        <Grid container item xs={12}  alignItems={"center"} className={classes.root}>
            <Grid item>
                <CLabel>{t('haveAnImage')}</CLabel>
            </Grid>
            <Grid item>
                <CSwitcher defaultChecked={true} onChange={handleChange}></CSwitcher>
            </Grid>
        </Grid>
    </CAccordition>
}

export default ImageFilter;