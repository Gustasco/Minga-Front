import {  createReducer } from "@reduxjs/toolkit"
import allComicsActions from "./actions.getAllComics"


const { getAllComics }=  allComicsActions
const initialState = {
    allcomics: [],
    message: ""
}

const allcomicsreducers = createReducer(
    initialState,
    (builder) => { builder
        .addCase(
            getAllComics.fulfilled,
            (state,action) =>{
                let newState = {
                    allcomics: action.payload.response.allcomics
                }
                return newState
            }
        )
    }
)

export default allcomicsreducers