import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./features/filter";

export const store = configureStore({
    reducer: {
        filter: filterSlice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>