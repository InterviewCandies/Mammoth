import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CollectionModel from "../types/CollectionModel";
import collectionService from "../services/Collection";

interface CollectionState {
    collection: CollectionModel[]
}

const initialState: CollectionState = {
    collection: []
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
        }
    }
});

export const {fetchCollection, createCollection} = collection.actions;
export default collection.reducer;