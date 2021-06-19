import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import ProductModel from "../types/ProductModel";
import * as _ from "lodash";

interface SelectionState {
    selection: ProductModel[]
}
const initialState : SelectionState = {
    selection: []
};

const selection = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        selectProducts(state, action: PayloadAction<ProductModel[]>) {
            state.selection = state.selection.concat(action.payload);
        },
        deselectProduct(state, action: PayloadAction<string>) {
            state.selection = state.selection.filter(item => item.id != action.payload);
        },
        updateProducts(state, action: PayloadAction<{key: string, value: unknown}>) {
            const { key, value } = action.payload;
            //@ts-ignore
            state.selection.forEach(product => product[key] = value);
        },
        addTags(state, action: PayloadAction<string[]>) {
            state.selection.forEach(product => product['tags'] = _.union(product['tags'], action.payload));
        },
        increaseQuantity(state, action: PayloadAction<number>) {
            state.selection.forEach(product => product['quantity'] =  product['quantity'] + action.payload);
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            state.selection.forEach(product => product['quantity'] =  Math.max(0, product['quantity'] - action.payload));
        },
        increasePrice(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.selection.forEach(product => product['price'] +=  Math.floor(product['price'] * value / 100));
            }
            else  state.selection.forEach(product => product['price'] += value);
        },
        decreasePrice(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.selection.forEach(product => product['price'] -=   Math.max(0, product['price'] - Math.floor(product['price'] * value / 100)));
            }
            else  state.selection.forEach(product => product['price'] = Math.max(0, product['price'] - value));
        },
        increaseDiscount(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.selection.forEach(product => product['discount'] +=  Math.floor(product['discount'] * value / 100));
            }
            else  state.selection.forEach(product => product['discount'] += value);
        },
        decreaseDiscount(state, action: PayloadAction<{type: "%" | unknown, value: number}>) {
            const { type, value } = action.payload;
            if (type === '%') {
                state.selection.forEach(product => product['discount'] -=   Math.max(0, product['discount'] - Math.floor(product['discount'] * value / 100)));
            }
            else  state.selection.forEach(product => product['discount'] = Math.max(0, product['discount'] - value));
        }
    }
});

export const {selectProducts, deselectProduct, updateProducts, addTags, increaseQuantity, decreaseQuantity, increasePrice, decreasePrice, increaseDiscount,decreaseDiscount} = selection.actions;
export default selection.reducer;
