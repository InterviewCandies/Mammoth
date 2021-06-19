import { createSlice } from "@reduxjs/toolkit";
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
        }
    }
});

export const { fetchSuppliers } = suppliers.actions;
export default suppliers.reducer;