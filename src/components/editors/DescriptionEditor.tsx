import {Grid, makeStyles, MenuItem} from "@material-ui/core";
import CSelect from "../common/CSelect";
import styled from "styled-components";
import CTextarea from "../common/CTextarea";
import CButton from "../common/CButton";
import CLabel from "../common/CLabel";
import CHeading from "../common/CHeading";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppSelector} from "../../hooks";

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
    const selectedProducts = useAppSelector(state => state.select.selection);
    const columns = [
        {
            name: "id",
            label: "ID",
        },
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

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('description')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid  item xs={12}>
                <CLabel>{t('summary')}</CLabel>
            </Grid>
            <Grid item xs={12}>
               <CTextarea rows={5}></CTextarea>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid  item xs={12}>
                <CLabel>{t('details')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CTextarea rows={5}></CTextarea>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default DescriptionEditor;