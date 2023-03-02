import axios from "axios"
import { API_URL } from "../configs"
const deleteData = async (url, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.delete(`${API_URL}${url}`,config)
    return response.data
  }catch (error) {
    return error.response.data
  }
}
export default deleteData