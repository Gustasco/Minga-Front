import { createReducer } from "@reduxjs/toolkit";
import comicsActions from "./actions";

const { getComics, getMyComics } = comicsActions;

const initialState = { comics: [], inputText: "", page: 1 };

const comicsReducers = createReducer(initialState, (builder) => {
  builder //contruye casos de lgca de reduccion
    .addCase(getComics.fulfilled, (state, action) => {
      let newState = {
        comics: action.payload.response.comics,
        text: action.payload.response.text,
        page: action.payload.response.page,
      };
      return newState;
    })
    .addCase(getMyComics.fulfilled, (state, action) => {
      const newState = {
        comics: action.payload.response,
        text: "",
        page: 1,
      };
      return newState;
    });
  //addCase rejected..
});

export default comicsReducers;
