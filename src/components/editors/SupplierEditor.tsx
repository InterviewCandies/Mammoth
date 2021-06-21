import {Grid, MenuItem, Typography} from "@material-ui/core";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import {useTranslation} from "react-i18next";
import CTable from "../common/CTable";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useState} from "react";
import RootStateModel from "../../types/RootStateModel";
import ProductModel from "../../types/ProductModel";
import {cloneWithoutFreeze} from "../../utils/cloneWithoutFreezeHelper";
import {useModal} from "mui-modal-provider";
import {useSnackbar} from "notistack";
import CInputDialog from "../common/CInputDialog";
import {createSupplier} from "../../features/suppliers";
import {v4 as uuid} from "uuid";
import useUpdateProducts from "../../hooks/useUpdateProducts";

function joinData(suppliers: RootStateModel[], products: ProductModel[]) {
    return products.map(product => {
        const supplier = suppliers.find(supplier => supplier.id === product.supplier);
        if (supplier)
            product.supplier = supplier.name;
        return product;
    })
}

function SupplierEditor() {
    const {t} = useTranslation();
    const suppliers = useAppSelector(state => state.suppliers.suppliers);
    const [nextSupplier, setNextSupplier] = useState<string>('');
    const dispatch = useAppDispatch();
    let selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const {showModal} = useModal();
    const {enqueueSnackbar} = useSnackbar();
    const {updateProducts} = useUpdateProducts();
    const columns = [
        {
            name: "productName",
            label: t('productName'),
        },
        {
            name: "supplier",
            label: t('supplier'),
        },
    ]

    const handleEditSupplier = () => {
        if (nextSupplier) {
            updateProducts(selectedProducts, 'supplier', () => nextSupplier);
            enqueueSnackbar(t('update'), {variant: 'success'});
        }
        else enqueueSnackbar(t('failedByEmptySupplier'), {variant: 'error'});
    }

    const handleAddSupplier = () => {
        const modal = showModal(CInputDialog, {
            label: t('addSupplier'),
            onOK: (value: string) => {
                const newSupplier = {id: uuid(), name: value};
                dispatch(createSupplier(newSupplier));
                setNextSupplier(newSupplier.id);
                modal.hide();
                enqueueSnackbar(t('added'), {variant: 'success'});
            },
            onCancel: () => {
                modal.hide();
            }
        })
    }

    return  <Grid container spacing={5}>
        <Grid item xs={12}>
           <CHeading>{t('supplier')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('setAll')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect value={nextSupplier} onChange={setNextSupplier} style={{width: "100%"}} allowAdd onAdd={handleAddSupplier}>
                    {suppliers.map(supplier => <MenuItem value={supplier.id} key={supplier.id}>{supplier.name}</MenuItem>)}
                </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton onClick={() => handleEditSupplier()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={joinData(suppliers, cloneWithoutFreeze<ProductModel>(selectedProducts))}></CTable>
        </Grid>
    </Grid>
}

export default SupplierEditor;