import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import ProductModel from "../types/ProductModel";
import {stat} from "fs";

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
        }
    }
});

export const {selectProducts, deselectProduct} = selection.actions;
export default selection.reducer;
