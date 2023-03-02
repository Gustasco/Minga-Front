import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "../../configs"

const getChapters = createAsyncThunk( 
    "getChapter",
    async ({id, page, limit}) => {
        try {
            const response= await axios.get(`http://localhost:8080/api/chapters?comic_id=${id}&page=${page}&${limit}`)
        return {
            response: {chapter: response.data},
            message: "Chapter obtained"
        }
        } catch (error) {
            return {
                response: {chapter: error.response.data},
                message: "Error obtained chapter"
            }
        }
    }
)
const getChapterDetails = createAsyncThunk("getChapterDetails", async (_id) => {
    try {
        const response = await axios.get(`${API_URL}/chapters/${_id}`)
        return {
            response: { chapter: response.data },
            message: "Chapter successfully obtained!",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error: Chapter cannot be obtained.",
        }
    }
  })

const chapterActions = {getChapters, getChapterDetails} 
export default chapterActions