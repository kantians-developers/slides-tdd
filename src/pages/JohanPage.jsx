import React from 'react'
import { Navbar } from '../components/Navbar'

export const JohanPage = () => {

  return (
    <>
      <Navbar/>
      
      <div className='w-full pt-6 flex justify-center gap-10 flex-wrap '>
        <img className='imagen' src="src/assets/test6-verde.png" alt="" />
        <img src="src/assets/test1.png" alt="" />
        <img src="src/assets/test2.png" alt="" />
      </div>
    </>
  )
}