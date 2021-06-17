import {Grid, MenuItem, Typography} from "@material-ui/core";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import {useTranslation} from "react-i18next";

function SupplierEditor() {
    const {t} = useTranslation();

    return  <Grid container spacing={5}>
        <Grid item xs={12}>
           <CHeading>{t('supplier')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('setAll')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={() => {}} style={{width: "100%"}}>
                    <MenuItem>Hello</MenuItem>
                    <MenuItem>Hello</MenuItem>
                </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CLabel>{t('selectedProducts')}</CLabel>
        </Grid>
    </Grid>
}

export default SupplierEditor;