import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import RootStateModel from "../types/RootStateModel";
import supplierService from "../services/Supplier";

interface SuppliersState {
    suppliers: RootStateModel[]
}

const initialState: SuppliersState = {
    suppliers: []
}

const suppliers = createSlice({
    name: 'suppliers',
    initialState,
    reducers: {
        fetchSuppliers(state) {
            state.suppliers = supplierService.fetch();
        },
        createSupplier(state, action: PayloadAction<RootStateModel>) {
            supplierService.create(action.payload);
            state.suppliers.push(action.payload);
        }
    }
});

export const { fetchSuppliers, createSupplier } = suppliers.actions;
export default suppliers.reducer;