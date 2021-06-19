import { createSlice } from "@reduxjs/toolkit";
import RootStateModel from "../types/RootStateModel";
import tagService from "../services/Tag";

interface TagsState {
    tags: RootStateModel[]
}

const initialState: TagsState = {
    tags: []
}

const tags = createSlice({
    name: "tags",
    initialState,
    reducers: {
        fetchTags(state) {
            state.tags = tagService.fetch();
        }
    }
});

export const { fetchTags } = tags.actions;
export default tags.reducer;