import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { getChapters } = chapterActions;

const initialState = {
    chapters: [],
    chapter: [],
    message: ""
};

const chapterReducerPato = createReducer(initialState, (builder) =>  {
    builder
.addCase(getChapters.fulfilled,
    (state, action) => {
        let newState = {
            chapters: action.payload.response.chapters,
            chapter: state.chapter,
            message: action.payload.message
        }
        return newState
    })})

    export default chapterReducerPato