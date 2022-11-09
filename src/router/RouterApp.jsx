import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {DanyPage, JohanPage, SimonPage, DayezaPage, BrandonPage} from '../pages/helper'


export const RouterApp = () => {
  return (
    <Routes>
        <Route path='/Dany' element={<DanyPage/>}/>
        <Route path='/' element={<JohanPage/>}/>
        <Route path='/Dayeza' element={<DayezaPage/>}/>
        <Route path='/Simon' element={<SimonPage/>}/>
        <Route path='/Brandon' element={<BrandonPage/>}/>
    </Routes>
  )
}
