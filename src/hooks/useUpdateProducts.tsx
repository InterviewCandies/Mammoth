import {updateSelectedProducts} from "../features/products";
import productService from "../services/Product";
import {cloneWithoutFreeze} from "../utils/cloneWithoutFreezeHelper";
import ProductModel from "../types/ProductModel";
import {useAppDispatch, useAppSelector} from "./index";
import RootStateModel from "../types/RootStateModel";

function useUpdateProducts() {
    const dispatch = useAppDispatch();

    function updateProducts(selectedProducts: any, property: string, nextValue: (value: string | number| string[]) => unknown) {
        const newState = (cloneWithoutFreeze(selectedProducts) as any).map((product: ProductModel) => {
            //@ts-ignore
            product[property] = nextValue(product[property]);
            return product;
        });
        dispatch(updateSelectedProducts(newState));
        productService.update(newState);
    }

    return { updateProducts }
}

export default useUpdateProducts