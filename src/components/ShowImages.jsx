import React, { useState } from 'react'
import { ShowModel } from './ShowModel'
import images from '../assets/images'

export const ShowImages = ({username}) => {

  const [focusImageState, setFocusImageState] = useState(false)
  const [nameImage, setNameImage] = useState('')

  const handleOnClick = (image) => {
    setNameImage(image)
    setFocusImageState(true)
  }

  const handleClick = () => {
    setFocusImageState(false)
  }

  return (
    <>
      <div className='w-full pt-6 flex justify-center gap-10 flex-wrap '>
        {
          images[username].map(image => (
            <img key={image} onClick={() => handleOnClick(image)}  src={`src/assets/${image}.png`} alt="" />
          ))
        }
      </div>

      <ShowModel focusImageState={focusImageState} handleClick={handleClick} nameImage={nameImage}/>
    </>
  )
}