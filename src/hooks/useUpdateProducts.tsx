import {updateSelectedProducts} from "../features/products";
import productService from "../services/Product";
import {cloneWithoutFreeze} from "../utils/cloneWithoutFreezeHelper";
import ProductModel from "../types/ProductModel";
import {useAppDispatch, useAppSelector} from "./index";
import RootStateModel from "../types/RootStateModel";
import {useContext} from "react";
import {LoadingContext} from "../provider/LoadingProvider";
import {useSnackbar} from "notistack";
import {useTranslation} from "react-i18next";

function useUpdateProducts() {
    const dispatch = useAppDispatch();
    const {turnOnLoading} = useContext(LoadingContext);
    const {enqueueSnackbar} = useSnackbar();
    const {t} = useTranslation();

    function updateProducts(selectedProducts: any, property: string, nextValue: (value: string | number| string[]) => unknown) {
        turnOnLoading(true);
        setTimeout(() => {
            const newState = (cloneWithoutFreeze(selectedProducts) as any).map((product: ProductModel) => {
                //@ts-ignore
                product[property] = nextValue(product[property]);
                return product;
            });
            dispatch(updateSelectedProducts(newState));
            productService.update(newState);
            turnOnLoading(false);
            enqueueSnackbar(t('updated'), {variant: 'success'});
        },1200)
    }

    return { updateProducts }
}

export default useUpdateProducts