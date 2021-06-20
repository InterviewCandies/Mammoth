import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./features/filter";
import selectionSlice from "./features/selection";
import categoriesSlice from "./features/categories";
import tagsSlice from "./features/tags";
import suppliersSlice from "./features/suppliers";
import productsSlice from "./features/products";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        select: selectionSlice,
        categories: categoriesSlice,
        tags: tagsSlice,
        suppliers: suppliersSlice,
        products: productsSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>