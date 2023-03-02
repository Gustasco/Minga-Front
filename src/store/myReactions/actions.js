import { createAsyncThunk } from "@reduxjs/toolkit"; //metoro para realizar acciones asincronas
import axios from "axios";

const getReactions = createAsyncThunk(
  //dos parametros,nombre de la accion,y la funcion asincrona
  "getReactions",
  async ({token,inputText="", inputCategory=""}) => {
    let url =`http://localhost:8080/api/reactions/me?category_id=${inputCategory}&title=${inputText}`
    
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    try {
      let reactions = await axios.get(url,headers);
      //console.log(reactions)
      return {
        success: true,
        response: { 
          reactions: reactions.data.response,
          text: inputText,
          category: inputCategory
        },
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error.message },
      };
    }
  }
);

const deleteLike= createAsyncThunk(
  "deleteLike",
async ({token,data}) => {
  let url =`http://localhost:8080/api/reactions/me`
  
  let headers = {headers:{'Authorization':`Bearer ${token}`}}
  try {
      let res = await axios.post(url,data,headers)
      return { 
          success: true,
          response: res.data.response,
          
      }
      console.log(res)
  } catch (error) {
      //console.log(error)
      return {
          success: false,
          response: error.response.data
      }
  }
})


const reactionsActions = {getReactions,deleteLike}

export default reactionsActions
