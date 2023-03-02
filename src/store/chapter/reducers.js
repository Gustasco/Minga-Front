import { createReducer } from "@reduxjs/toolkit";
import chapterActions from "./actions";

const { getChapter , deleteChapter} = chapterActions;

const initialState = {
	response: null,
  success: false
};

const chapterReducer = createReducer(initialState, (builder) => {
	builder
	
	.addCase(deleteChapter.fulfilled, (state,action ) =>{
		return {...state}
	})
    .addCase(getChapter.pending, (state, action) => {
      const newState = {
        response: 'Loading...',
        success: false
      }
      return newState
    })
		.addCase(getChapter.fulfilled, (state, action) => {
			const newState = {
				response: action.payload.response,
        success: action.payload.success
			};
			return newState;
		})
		.addCase(getChapter.rejected, (state, action) => {
			const newState = {
				response: 'Oh! theres an error :( Check your internet connection',
        success: action.payload.success
			};
			return newState;
		});
});

export default chapterReducer