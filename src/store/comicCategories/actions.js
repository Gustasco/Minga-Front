import { createAction } from "@reduxjs/toolkit"

const filterCategoryComics = createAction(
  'filterCategoryComics',
  (data) => {
    console.log(data)
    return {
      payload: data
    }
    
  }
) 

const filterCategoryComicsActions = { filterCategoryComics }
export default filterCategoryComicsActions