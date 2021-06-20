import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./features/filter";
import selectionSlice from "./features/products";
import categoriesSlice from "./features/categories";
import tagsSlice from "./features/tags";
import suppliersSlice from "./features/suppliers";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        products: selectionSlice,
        categories: categoriesSlice,
        tags: tagsSlice,
        suppliers: suppliersSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>