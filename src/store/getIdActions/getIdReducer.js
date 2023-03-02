import { createReducer } from "@reduxjs/toolkit"
import getIdActions from "./getIdActions"

const { getIdComic, getIdChapter, getComicsById } = getIdActions

const initialState = {
    idComic: [],
    idChapter: []
}
const getIdReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getIdComic.fulfilled, (state, action) => {
            let newState = {
                idComic: action.payload,

            }

            return newState
        })
        .addCase(getIdChapter.fulfilled, (state, action) => {
            let newState = {
                idChapter: action.payload,
            }


            return newState
        })
/*         .addCase(getComicsById.fulfilled, (state, action) => {
            let newState = {
                comics: action.payload.response.comics,
                message: action.payload.message
            }
            return newState
        }) */
})

export default getIdReducer