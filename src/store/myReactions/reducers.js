import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "./actions";

const { getReactions,deleteLike } = reactionsActions;

const initialState = { reactions: [] };

const reactionsReducers = createReducer(initialState, (builder) => {
  builder.addCase(getReactions.fulfilled, (state, action) => {
    let newState = {
      reactions: action.payload.response.reactions,
      text: action.payload.response.text,
      category: action.payload.response.category,
        
    };
    return newState;
  });
  builder.addCase(deleteLike.fulfilled, (state, action) => {
    let newState = {
      reactions: action.payload.response.reactions,
      //category: action.payload.response.category,
    };
    return newState;
  });
});

export default reactionsReducers
