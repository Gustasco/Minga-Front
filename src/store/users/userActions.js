import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";
const apiUrl = API_URL
const update = createAsyncThunk(
    "update",
    async({data, token, name}) => {
        try{
            let url = `${apiUrl}${name}/me`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.put(url, data, headers)
            console.log(response)
            return {
                success: true,
                response: {data: response.data}
            }
        } catch(error){
            return {
                success: false,
                response: error.response.data.response
            }
        }
    }
)

export default update