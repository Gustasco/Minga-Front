import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions";

const { mingaAlert } = alertActions

const initialState = {
  message: '',
  visible: false,
  status: false
}

const alertReducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(mingaAlert, (state, action) => {
        const newState = {
          message: action.payload.message,
          visible: action.payload.visible,
          status: action.payload.status
        }
        return newState
      })
  }
)

export default alertReducer