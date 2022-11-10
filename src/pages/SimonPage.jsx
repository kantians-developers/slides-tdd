import React from 'react'
import { Navbar } from '../components/Navbar'
import { ShowImages } from '../components/ShowImages'

export const SimonPage = () => {
  return (
    <>
      <Navbar/>
      <ShowImages username={'Simon'}/>
    </>
  )
}
