import chapterActions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const { getChapters, getChapterDetails } = chapterActions

const initialState = {
    chapters: [],
    message: ""
} 
const chapterReducer = createReducer(
    initialState,
    (builder) =>  {
    builder
    .addCase(getChapterDetails.fulfilled, (state, action) => {
        let newState = {
            chapters: state.chapters,
            chapter: action.payload.response.chapter,
            message: action.payload.message
        }
        return newState
    })
    .addCase(getChapters.fulfilled,
        (state, action) => {
            let newState = {
                chapters: action.payload.response.chapter,
                message: action.payload.message
            }
            return newState
        }
        )
    
})
export default chapterReducer