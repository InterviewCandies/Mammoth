import CAccordition from "../common/CAccordition";
import {Collapse, Grid, makeStyles} from "@material-ui/core";
import CCheckbox from "../common/CCheckbox";
import CLabel from "../common/CLabel";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks";
import {addFilter} from "../../features/filter";

const useStyles = makeStyles((theme)=>({
    checkbox: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
    },
}))

const COLOR = ['red', 'blue', 'yellow', 'pink', 'purple', 'green', 'black', 'white'];

function OptionFilter() {
    const {t} = useTranslation();
    const classes = useStyles();
    const [checkbox, setCheckbox] = useState<Record<string, boolean>>({});
    const dispatch = useAppDispatch();

    const toggleCheck = (title: string) => {
        setCheckbox((prevState) => {
            const newState = {...prevState};
            newState[title] = !newState[title];
            return newState;
        })
    }

    useEffect(() => {
        const options = Object.keys(checkbox).filter((key: string) => checkbox[key]);
        dispatch(addFilter({key: 'options', value: options}))
    }, [checkbox])

    return <CAccordition title={'options'}>
        <>
            <Grid container item xs={12}  spacing={5}>
                {
                    COLOR.map(color =>
                        <Grid item className={classes.checkbox}>
                            <CCheckbox checked={checkbox[color]} onChange={() => toggleCheck(color)}></CCheckbox>
                            <CLabel>{t(color)}</CLabel>
                        </Grid>)
                }
            </Grid>
        </>
    </CAccordition>
}

export default OptionFilter;