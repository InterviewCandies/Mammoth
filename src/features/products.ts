import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import ProductModel from "../types/ProductModel";
import * as _ from "lodash";
import productService from "../services/Product";
import {State} from "mui-modal-provider/dist/types";

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
        updateProducts(state, action: PayloadAction<{key: string, value: unknown}>) {
            const { key, value } = action.payload;
            state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    //@ts-ignore
                    product[key] = value;
                }
            });
        },
        addTags(state, action: PayloadAction<string[]>) {
            state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['tags'] = _.union(product['tags'], action.payload)
                }
            });
        },
        increaseQuantity(state, action: PayloadAction<number>) {
            state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['quantity'] +=  action.payload;
                }
            });
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['quantity'] = Math.max(0, product['quantity'] - action.payload);
                }
            });
        },
        increasePrice(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.products.forEach(product => {
                    if (state.selection.includes(product.id)) {
                        product['price'] +=  Math.floor(product['price'] * value / 100);
                    }
                });
            }
            else  state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['price'] += value;
                }
            });
        },
        decreasePrice(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.products.forEach(product => {
                    if (state.selection.includes(product.id)) {
                        product['price'] -= Math.max(0, product['price'] - Math.floor(product['price'] * value / 100))
                    }
                });
            }
            else  state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['price'] = Math.max(0, product['price'] - value);
                }
            });
        },
        increaseDiscount(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.products.forEach(product => {
                    if (state.selection.includes(product.id)) {
                        product['discount'] +=  Math.floor(product['discount'] * value / 100);
                    }
                });
            }
            else  state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['discount'] += value;
                }
            });
        },
        decreaseDiscount(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.products.forEach(product => {
                    if (state.selection.includes(product.id)) {
                        product['discount'] -= Math.max(0, product['discount'] - Math.floor(product['discount'] * value / 100))
                    }
                });
            }
            else  state.products.forEach(product => {
                if (state.selection.includes(product.id)) {
                    product['discount'] = Math.max(0, product['discount'] - value);
                }
            });
        },

    }
});

export const {fetchProducts, replaceSelectedProducts, selectProducts, deselectProduct, updateProducts, addTags, increaseQuantity, decreaseQuantity, increasePrice, decreasePrice, increaseDiscount,decreaseDiscount} = products.actions;
export default products.reducer;
