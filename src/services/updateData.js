import axios from "axios"
import { API_URL } from "../configs"
const updateData = async (url, data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.put(`${API_URL}${url}`, data, config)
    return response.data
  }catch (error) {
    return error.response.data
  }
}
export default updateData