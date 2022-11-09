import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {DanyPage, HomePage, JohanPage, SimonPage, DayezaPage, BrandonPage} from '../pages/helper'
import { InicialPage } from '../pages/InicialPage'


export const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Dany' element={<DanyPage/>}/>
        <Route path='/Inicial' element={<InicialPage/>}/>
        <Route path='/Johan' element={<JohanPage/>}/>
        <Route path='/Dayeza' element={<DayezaPage/>}/>
        <Route path='/Simon' element={<SimonPage/>}/>
        <Route path='/Brandon' element={<BrandonPage/>}/>
    </Routes>
  )
}
