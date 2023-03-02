import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../configs";

const getChapter = createAsyncThunk(
  'get-chapter',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API_URL}chapters/${id}`)
      console.log(res.data)
      return {
        success: true,
        response: res.data.response
      }
    } catch (error) {
      return rejectWithValue({
        success: false,
        response: error.response.data
      })
    }
  },
)
const updateChapter = createAsyncThunk(
  'updateChapter',
  async ( chapter , { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    const { _id } = chapter
    delete chapter._id
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    console.log(chapter)
    console.log(_id)
    try {
      const res = await axios.put(`${API_URL}chapters/${_id}`,chapter,headers)
      console.log(res.data)
      return {
        success: true,
        response: res.data.response
      }
    } catch (error) {
      return rejectWithValue({
        success: false,
        response: error.response.data
      })
    }
  },
)
const deleteChapter = createAsyncThunk(
  'deleteChapter',
  async ( chapter , { rejectWithValue }) => {
    const token = localStorage.getItem("token")
    //const { _id } = chapter
    const id = chapter._id
    //delete chapter._id
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    //console.log(chapter)
    console.log(id)
    try {
      const res = await axios.delete(`${API_URL}chapters/${id}`,headers )
      console.log(res.data)
      return {
        success: true,
        response: res.data.response
      }
    } catch (error) {
      return rejectWithValue({
        success: false,
        response: error.response.data
      })
    }
  },
)




const chapterActions = { getChapter, updateChapter ,deleteChapter}

export default chapterActions