import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./features/filter";
import selectionSlice from "./features/selection"

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        select: selectionSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>