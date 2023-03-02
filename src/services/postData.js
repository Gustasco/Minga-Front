import axios from "axios"
const postData = async (url, data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.post(url, data, config)
    return response.data
  }catch (error) {
    return error.response.data
  }
}
export default postData