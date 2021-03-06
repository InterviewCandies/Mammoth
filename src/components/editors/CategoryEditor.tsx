import {Grid, ListItem, makeStyles, MenuItem, Typography} from "@material-ui/core";
import CSelect from "../common/CSelect";
import CButton from "../common/CButton";
import CHeading from "../common/CHeading";
import CLabel from "../common/CLabel";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "../../hooks";
import CTable from "../common/CTable";
import RootStateModel from "../../types/RootStateModel";
import ProductModel from "../../types/ProductModel";
import {useEffect, useState} from "react";
import {updateSelectedProducts} from "../../features/products";
import {cloneWithoutFreeze} from "../../utils/cloneWithoutFreezeHelper";
import {useModal} from "mui-modal-provider";
import CInputDialog from "../common/CInputDialog";
import CInput from "../common/CInput";
import {createCategory} from "../../features/categories";
import { v4 as uuid } from 'uuid';
import {useSnackbar} from "notistack";
import productService from "../../services/Product";
import useUpdateProducts from "../../hooks/useUpdateProducts";


function joinData(categories: RootStateModel[], products: ProductModel[]) {
    return products.map(product => {
        const category = categories.find(category => category.id === product.category);
        if (category)
            product.category = category.name;
        return product;
    })
}

function CategoryEditor() {
    const {t} = useTranslation();
    const categories = useAppSelector(state => state.categories.categories);
    let selectedProducts = useAppSelector(state => state.products.products.filter(product => state.products.selection.includes(product.id)));
    const [nextCategory, setNextCategory] = useState<string>('');
    const {showModal} = useModal();
    const dispatch = useAppDispatch();
    const {enqueueSnackbar} = useSnackbar();
    const  {updateProducts} = useUpdateProducts();


    const columns = [
        {
            name: "productName",
            label: t('productName'),
        },
        {
            name: "category",
            label: t('category'),
        },
    ];

    const handleAddCategory = () => {
        const modal = showModal(CInputDialog, {
            label: t('addCategory'),
            onOK: (value : string) => {
                const newCategory = {id: uuid(), name: value};
                dispatch(createCategory(newCategory));
                setNextCategory(newCategory.id);
                enqueueSnackbar(t('added'), {variant: "success"});
                modal.hide();
            },
            onCancel: () => { modal.hide() },
        });
    }

    const handleEditCategory = () => {
        updateProducts(selectedProducts, 'category', () => { return nextCategory})
    }

    return  <Grid container spacing={5} >
        <Grid item xs={12}>
           <CHeading>{t('category')}</CHeading>
        </Grid>
        <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
                <CLabel>{t('setAll')}</CLabel>
            </Grid>
            <Grid item xs={12}>
                <CSelect onChange={setNextCategory} value={nextCategory} style={{width: '100%'}} allowAdd onAdd={() => handleAddCategory()}>
                    {categories.map(category => <ListItem key={category.id} value={category.id}>{category.name}</ListItem>)}
                </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton onClick={() => handleEditCategory()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={joinData(categories, cloneWithoutFreeze<ProductModel>(selectedProducts))}></CTable>
        </Grid>
    </Grid>
}

export default CategoryEditor