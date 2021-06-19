import {Grid, MenuItem} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import CInput from "../common/CInput";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppSelector} from "../../hooks";

function TaxEditor() {
    const [taxType, setTaxType] = useState<string>('A')
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
            name: "taxType",
            label: t('taxType'),
        },
        {
            name: "taxAmount",
            label: t('taxAmount'),
        },
    ]

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('tax')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('taxType')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect value={taxType} onChange={(value) => setTaxType(value)} style={{minWidth: '500px'}}>
                    <MenuItem value={"A"}>Taxable goods</MenuItem>
                    <MenuItem value={"B"}>Duty-free goods</MenuItem>
                    <MenuItem value={"C"}>Small good</MenuItem>
                </CSelect>
                <CButton style={{marginLeft: "0.5rem"}}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('taxAmount')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CInput type={"number"} style={{minWidth: '500px'}}></CInput>
                <CButton style={{marginLeft: "0.5rem"}}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default TaxEditor;