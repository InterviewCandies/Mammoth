import {Collapse, Grid, makeStyles, MenuItem} from "@material-ui/core";
import CSelect from "../common/CSelect";
import styled from "styled-components";
import CTextarea from "../common/CTextarea";
import CButton from "../common/CButton";
import CLabel from "../common/CLabel";
import CHeading from "../common/CHeading";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useState} from "react";
import {updateProducts} from "../../features/products";
import CCheckbox from "../common/CCheckbox";
import {useSnackbar} from "notistack";

const Label = styled.h6`
    color: ${({theme}) => theme.buttonText};
    font-size: 1rem;
    margin: 0.5rem 0;
`
const Heading = styled.h2`
    text-transform: uppercase;
    letter-spacing: 0.15em;
    fontWeight: 700;
    margin: 0;
`
const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    },
}))

function DescriptionEditor() {
    const classes = useStyles();
    const {t} = useTranslation();
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const [summary, setSummary] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const {enqueueSnackbar} = useSnackbar();
    const [checkBoxes, setCheckboxes] = useState<boolean[]>([]);
    const dispatch = useAppDispatch();

    const columns = [
        {
            name: "productName",
            label: t('productName'),
        },
        {
            label: t('summary'),
            name: "summary",
        },
        {
            label: t('details'),
            name: "details",
        },
    ]

    const handleEditSummary = () => {
        dispatch(updateProducts({key: "summary", value: summary}));
        setSummary('');
        enqueueSnackbar(t('updated'), {variant: 'success'});
    }

    const handleEditDetails = () => {
        dispatch(updateProducts({key: "details", value: details}));
        setDetails('');
        enqueueSnackbar(t('updated'), {variant: 'success'});
    }

    const handleCheckbox = (index: number) => {
        setCheckboxes(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        })
    }

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('description')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                <CLabel>{t('summary')}</CLabel>
                <CCheckbox checked={checkBoxes[0]} onChange={() => handleCheckbox(0)}/>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={checkBoxes[0]}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CTextarea rows={5} value={summary} onChange={e => setSummary(e.target.value)}></CTextarea>
                        </Grid>
                        <Grid item xs={12} className={classes.right}>
                            <CButton onClick={() => handleEditSummary()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid container item xs={12} alignItems={"center"} justify={"space-between"}>
                <CLabel>{t('details')}</CLabel>
                <CCheckbox checked={checkBoxes[1]} onChange={() => handleCheckbox(1)}/>
            </Grid>
            <Grid item xs={12}>
                <Collapse in={checkBoxes[1]}>
                    <Grid container xs={12}>
                        <Grid item xs={12}>
                            <CTextarea rows={5} value={details} onChange={e => setDetails(e.target.value)}></CTextarea>
                        </Grid>
                        <Grid item xs={12} className={classes.right}>
                            <CButton onClick={() => handleEditDetails()}>{t('apply')}</CButton>
                        </Grid>
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default DescriptionEditor;