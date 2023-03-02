import { createAction } from "@reduxjs/toolkit"

const mingaAlert = createAction(
  'alert',
  (data) => {
    return {
      payload: data
    }
  }
) 

const alertActions = { mingaAlert }
export default alertActions