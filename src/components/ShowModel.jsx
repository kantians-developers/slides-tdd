import React from 'react'

export const ShowModel = ({focusImageState, handleClick, nameImage}) => {
  const hiddenImage = 'hiddenImage'

  return (
    <>
      <div onClick={handleClick} className={`modal ${focusImageState ? '' : hiddenImage}`}>
        <img src={`src/assets/${nameImage}.png`} alt="" />
      </div>

      <div onClick={handleClick} className={`overlay ${focusImageState ? '' : hiddenImage}`}></div>
    </>
  )
}
