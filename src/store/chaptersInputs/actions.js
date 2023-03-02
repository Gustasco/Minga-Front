import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "../../configs"

    const getChapters = createAsyncThunk("getChapters", async ( id ) => {
    try {
        const response = await axios.get(
            `${API_URL}/chapters?comic_id=${id}&limit=200`,
        )
        return {
            response: { chapters: response.data },
            message: "Chapters obtained",
        }
    } catch (error) {
        return {
            response: { chapters: error.response.data },
            message: "Error obtained chapters",
        }
    }
}
)


const chapterActions = {getChapters}

export default chapterActions