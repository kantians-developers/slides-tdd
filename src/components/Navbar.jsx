import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    const activeStyle = {
        backgroundColor: '#fff',
        borderRadius: '1rem',
        padding: '0.75rem'
    }

  return (
    <nav className='py-4 px-48 bg-[#7289da] rounded-2xl m-2'>
        <ul className='flex justify-center gap-20'>
            <li className='p-3 rounded-2xl hover:bg-[#fff]'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/'>Johan</NavLink>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#fff]'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/Dayeza'>Dayeza</NavLink>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#fff]'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/Brandon'>Brandon</NavLink>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#fff]'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/Simon'>Simon</NavLink>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#fff]'>
                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/Dany'>Dany</NavLink>
            </li>
        </ul>
    </nav>
  )
}
