import React from 'react'

const Form = ({children, handler}) => {
  return (
    <form className='formChapter' onSubmit={handler}>
      {
        children
      }
      <input className='enviar' type="submit" value="Send" />
    </form>
  )
}

export default Form
