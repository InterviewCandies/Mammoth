import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./features/filter";
import selectionSlice from "./features/products";
import categoriesSlice from "./features/categories";
import tagsSlice from "./features/tags";
import suppliersSlice from "./features/suppliers";
import collectionSlice from "./features/collection";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        products: selectionSlice,
        categories: categoriesSlice,
        tags: tagsSlice,
        suppliers: suppliersSlice,
        collection: collectionSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>