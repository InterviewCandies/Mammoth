import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import RootStateModel from "../types/RootStateModel";
import categoryService from "../services/Category"

interface CategoryState {
    categories: RootStateModel[]
}

const initialState: CategoryState = {
    categories: []
}

const categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        fetchCategories(state) {
            state.categories = categoryService.fetch();
        },
        createCategory(state, action: PayloadAction<RootStateModel>) {
            categoryService.create(action.payload);
            state.categories.push(action.payload);
        }
    }
})

export const { fetchCategories, createCategory } = categories.actions;
export default categories.reducer;