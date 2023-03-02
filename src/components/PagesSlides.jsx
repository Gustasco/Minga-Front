import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PagesSlides = ({prev, next, currentChapter}) => {
  const [actualImg, setActualImg] = useState(0)
  const { response } = useSelector(store => store.chapter)
  const _handlePrev = () => {
    setActualImg(actualImg - 1)
    if(actualImg < 1) {
      prev()
    }
  }
  const _handleNext = () => {
    setActualImg(actualImg + 1)
    if(actualImg > response?.pages?.length - 2) {
      next()
    }
  }
  const _handleLoadPage = (e) => {
    localStorage.setItem('current-page', e.target.src)
  }
  useEffect(()=> {
    const storageChapter = localStorage.getItem('current-page')
    const indexChapter = response?.pages?.findIndex(page => page === storageChapter)
    if(indexChapter !== -1) {
      setActualImg(indexChapter)
    }
  }, [])
  return (
    <>
      <div className='page' >
          <div className='buttons-container'>
            <button onClick={_handlePrev} className='page-button'></button>
            <button onClick={_handleNext} className='page-button'></button>
          </div>
          {
            response?.pages?.map((page, index) => {
              return <div key={index} onLoad={_handleLoadPage}>
                {
                  actualImg === index && (
                    <img className='page-img' src={page} alt={`page ${index+1}`}/>
                  )
                }
              </div>
            })
          }
        </div>
        <p className='page-number'>{actualImg + 1}</p>
    </>
  )
}

export default PagesSlides