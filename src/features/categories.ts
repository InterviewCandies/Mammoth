import {createSlice} from "@reduxjs/toolkit";
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
        }
    }
})

export const {fetchCategories} = categories.actions;
export default categories.reducer;