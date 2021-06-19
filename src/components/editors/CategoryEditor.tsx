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
import {updateProducts} from "../../features/selection";
import {cloneWithoutFreeze} from "../../utils/cloneWithoutFreezeHelper";

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
    let selectedProducts = useAppSelector(state => state.select.selection);
    selectedProducts = joinData(categories, cloneWithoutFreeze<ProductModel>(selectedProducts));
    const [nextCategory, setNextCategory] = useState<string>('');
    const dispatch = useAppDispatch();

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
            name: "category",
            label: "Category",
        },
    ]

    useEffect(() => {
        console.log(nextCategory)
    }, [nextCategory])

    const handleEditCategory = () => {
        if (nextCategory)
            dispatch(updateProducts({key:'category', value: nextCategory}))
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
                <CSelect onChange={setNextCategory} value={nextCategory} style={{width: '100%'}}>
                    {categories.map(category => <ListItem key={category.id} value={category.id}>{category.name}</ListItem>)}
                </CSelect>
            </Grid>
            <Grid item xs={12} style={{display: "flex",justifyContent:"flex-end"}}>
                <CButton onClick={() => handleEditCategory()}>{t('apply')}</CButton>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <CTable title={t('selectedProducts')} columns={columns} data={selectedProducts}></CTable>
        </Grid>
    </Grid>
}

export default CategoryEditor