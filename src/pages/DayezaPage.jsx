import React from 'react'
import { Navbar } from '../components/Navbar'
import { Link } from 'react-router-dom'
import { ShowImages } from '../components/ShowImages'

export const DayezaPage = () => {

  return (
    <>
      <Navbar/>
      <ShowImages username={'Dayeza'}/>
    </>
  )
}
