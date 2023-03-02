import { createReducer } from "@reduxjs/toolkit";
import adminActions from "./actions";

const {getAuthors, getCompanies} = adminActions

const initialState = {authors: [], inputText: ""}
const initialState2 = {companies: [], inputText: ""}

const adminReducers1 = createReducer(initialState, (builder) =>{
    builder
        .addCase(getAuthors.fulfilled, (state, action)=>{
            let newState = {
                authors: action.payload.response.authors,
                inputText: action.payload.message
            }
            return newState
        })
})
const adminReducers2 = createReducer(initialState2, (builder)=>{
    builder
    .addCase(getCompanies.fulfilled, (state, action)=>{
        let newState = {
            companies: action.payload.response.companies,
            inputText: action.payload.message
        }
        return newState
    })
})

const adminReducers = {adminReducers1, adminReducers2}

export default adminReducers