import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const getIdComic = createAsyncThunk( 
    "getIdComic",

    async (data) => {
        console.log(data)
        return {payload: data} 

    }
)


const getIdChapter = createAsyncThunk( 
    "getIdChapter",
    async (data) => {
        console.log(data)
        return {payload: data} 
    }
)

const getIdActions = {getIdComic, getIdChapter} 

export default getIdActions