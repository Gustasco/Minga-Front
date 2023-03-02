import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const getAuthors = createAsyncThunk( 
    "getAuthors",
    async (token) => {
        try {
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response= await axios.get(`http://localhost:8080/api/authors?active=true`, headers)
        return {
            response: {authors: response.data},
            message: "authors obtained"
        }
        } catch (error) {
            return {
                response: {authors: error.response.data},
                message: "Error obtained authors"
            }
        }
    }
)
const getCompanies = createAsyncThunk( 
    "getCompanies",
    async (token) => {
        try {
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response= await axios.get(`http://localhost:8080/api/companies?active=true`, headers)
        return {
            response: {companies: response.data},
            message: "companies obtained"
        }
        } catch (error) {
            return {
                response: {companies: error.response.data},
                message: "Error obtained companies"
            }
        }
    }
)
const adminActions= { getAuthors, getCompanies}

export default adminActions