import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface FilterOptions {
    filter: Record<string, unknown>,
    checkbox: Record<string, boolean>
}

const initialState: FilterOptions = {
    filter: {},
    checkbox: {productName: true, category: true, price: true, tags: true, discount: true}
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter(state, action: PayloadAction<{key: string, value: unknown}>) {
            const {key, value} = action.payload;
            state.filter[key] = value
        },
        setCheckbox(state, action: PayloadAction<{key: string, value: boolean}>) {
            const {key, value} = action.payload;
            state.checkbox[key] = value;
        }
    }
})

export const {addFilter, setCheckbox} = filterSlice.actions;
export default filterSlice.reducer;