import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";

const getAllComics = createAsyncThunk(
    "getAllComics",
    async () =>{
        try{
            let allcomics = await axios.get(`${API_URL}comics`)

            return {
                success: true ,
                response: {
                    allcomics:allcomics.data.response
                }
            }
        } catch (error) {
            return {
                success:false,
                response:{error:error.message}
            }
        }
    }
)

const allComicsActions = { getAllComics }

export default allComicsActions