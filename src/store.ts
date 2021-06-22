import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import filterSlice from "./features/filter";
import selectionSlice from "./features/products";
import categoriesSlice from "./features/categories";
import tagsSlice from "./features/tags";
import suppliersSlice from "./features/suppliers";
import collectionSlice from "./features/collection";
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    filter: filterSlice,
    products: selectionSlice,
    categories: categoriesSlice,
    tags: tagsSlice,
    suppliers: suppliersSlice,
    collection: collectionSlice
})

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>