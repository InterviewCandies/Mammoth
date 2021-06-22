import {Grid, makeStyles, MenuItem} from "@material-ui/core";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import CInput from "../common/CInput";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSnackbar} from "notistack";
import useUpdateProducts from "../../hooks/useUpdateProducts";

const useStyles = makeStyles(() => ({
    right: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

function OptionsEditor() {
    const [productCondition, setProductCondition] = useState<string>("N");
    const [material, setMaterial] = useState<string>('');
    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const {updateProducts} = useUpdateProducts();
    const selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const columns = [
        {
            name: "productName",
            label: t('productName'),
        },
        {
            name: "productCondition",
            label: t('productCondition'),
        },
        {
            name: "material",
            label: t('material'),
        },
    ]

    const handleEditProductCondition = () => {
        updateProducts(selectedProducts, 'productCondition', () => productCondition)
    }

    const handleEditMaterial = () => {
        updateProducts(selectedProducts, 'material', () => material)
        setMaterial('');
    }

    return <Grid container spacing={5}>
        <Grid item xs={12}>
            <CHeading>{t('options')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('productCondition')}</CLabel>
            </Grid>
            <Grid item xs={12} spacing={3}>
                <Grid item xs={12}>
                    <CSelect  value={productCondition} onChange={(value) => setProductCondition(value)} style={{width: '100%'}}>
                        <MenuItem value={"N"}>N: New</MenuItem>
                        <MenuItem value={"B"}>B: Once returned to a seller's warehouse</MenuItem>
                        <MenuItem value={"U"}>U: Used</MenuItem>
                        <MenuItem value={"E"}>E: Displayed (Condition which already displayed at offline mall or sort of exhibition)</MenuItem>
                        <MenuItem value={"F"}>F: Refurbished</MenuItem>
                        <MenuItem value={"S"}>S: Damaged</MenuItem>
                    </CSelect>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton onClick={() => handleEditProductCondition()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('material')}</CLabel>
            </Grid>
            <Grid container item xs={12} >
                <Grid item xs={12}>
                    <CInput style={{width: "100%"}} value={material} onChange={e => setMaterial(e.target.value)}></CInput>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.right}>
                <CButton onClick={() => handleEditMaterial()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>;
}

export default OptionsEditor;