import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import ProductModel from "../types/ProductModel";
import * as _ from "lodash";
import productService from "../services/Product";
import {State} from "mui-modal-provider/dist/types";
import product from "../mocks/product";

interface ProductsState {
    selection: string[],
    products: ProductModel[],
    selectedProducts: ProductModel[]
}
const initialState : ProductsState = {
    selection: [],
    products: [],
    selectedProducts: []
};

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state) {
            state.products = productService.fetch();
        },
        selectProducts(state, action: PayloadAction<string[]>) {
            state.selection = state.selection.concat(action.payload);
        },
        replaceSelectedProducts(state, action: PayloadAction<string[]>) {
            state.selection = action.payload;
        },
        deselectProduct(state, action: PayloadAction<string>) {
            state.selection = state.selection.filter(id => id != action.payload);
        },
        updateSelectedProducts(state, action: PayloadAction<ProductModel[]>) {
            const selectedProducts = action.payload;
             state.products = state.products.map(product => {
                 const index = selectedProducts.findIndex(selectedProduct => product.id === selectedProduct.id);
                 if (index >= 0)
                     return selectedProducts[index];
                 return product;
             })
        },
    }
});

export const {updateSelectedProducts, fetchProducts, replaceSelectedProducts, selectProducts, deselectProduct} = products.actions;
export default products.reducer;
