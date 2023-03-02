import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TestComics = () => {
  const chapters = JSON.parse(localStorage.getItem('id-chapters')) || []
  useEffect(() => {
    localStorage.setItem('id-chapters', '["63bd77a24dc6ee27758ac91d", "63bd77a24dc6ee27758ac91e", "63bd77a24dc6ee27758ac91f"]')
  }, [])
  return (
    <div>
      <h2>Test page</h2>
      {
        chapters.map((chapter, index) => <Link key={index} to={"/pages/"+chapter}>capitulo - {index + 1}</Link>)
      }
    </div>

  )
}

export default TestComics