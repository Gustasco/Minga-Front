import { createReducer } from "@reduxjs/toolkit";
import filterCategoryComicsActions from "./actions";

const { filterCategoryComics } = filterCategoryComicsActions

const initialState = {
    filterCategory: []
}

const filterCategoryReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(filterCategoryComics, (state, action) => {
        //console.log(action.payload)
        if(state.filterCategory.includes(action.payload)){
            const newState = {
            filterCategory: state.filterCategory.filter((id)=>id !== action.payload)
            }
            return newState
        }else{
            state.filterCategory.push(action.payload)
        }
      }
    )  
  }
)

export default filterCategoryReducer