import { createSlice } from "@reduxjs/toolkit";
import ProductModel from "../types/ProductModel";
import productService from "../services/Product";

interface ProductsState {
    products: ProductModel[]
}

const initialState: ProductsState = {
    products: []
}

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state) {
            state.products = productService.fetch();
        }
    }
});

export const { fetchProducts } = products.actions;
export default  products.reducer;