import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '../../configs'

const getComics = createAsyncThunk(
  "getComics",
  async ({ inputText, inputCategory, page}) => {
    //solo deja enviar 1 parametro
    try {
      let comics = await axios.get(
        `http://localhost:8080/api/comics?title=${inputText}&category_id=${inputCategory}&page=${page}`
      );
      //console.log(inputCategory);
      return {
        success: true,
        response: {
          comics: comics.data.response, //comics es la respuesta de la peticion
          text: inputText, // evento capturado del input de texto
          category: inputCategory,
          page: page
        }, // evento capturado de los cheks
      };
    } catch (error) {
      return {
        success: false,
        response: { error: error.message },
      };
    }
  }
);

const getMyComics = createAsyncThunk('getMyComics', async ({token}) => {
  try {
    const config = {
      headers: {
          Authorization : `Bearer ${token}`
        }
    }
    const comics = await axios.get(`${API_URL}comics/me`, config)
    console.log(comics.data.response)
    return {
      success: true,
      response: comics.data.response
    }
  } catch (error) {
    return {
      success: false,
      response: {
        error: error.message
      }
    }
  }
})

const comicsActions = { getComics, getMyComics };

export default comicsActions;
