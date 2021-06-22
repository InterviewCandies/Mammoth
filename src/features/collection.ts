import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CollectionModel from "../types/CollectionModel";
import collectionService from "../services/Collection";

interface CollectionState {
    collection: CollectionModel[],
    currentCollection: string
}

const initialState: CollectionState = {
    collection: [],
    currentCollection: ''
}

const collection = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        fetchCollection(state) {
            state.collection = collectionService.fetch();
        },
        createCollection(state, action: PayloadAction<CollectionModel>) {
            collectionService.create(action.payload);
            state.collection.push(action.payload);
        },
        updateCurrentCollection(state, action: PayloadAction<string>) {
            state.currentCollection = action.payload;
        }
    }
});

export const {fetchCollection, createCollection, updateCurrentCollection} = collection.actions;
export default collection.reducer;