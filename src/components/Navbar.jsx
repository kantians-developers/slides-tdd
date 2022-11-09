import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='py-4 px-48 bg-[#f8d8a5] rounded-2xl m-2'>
        <ul className='flex justify-center gap-20'>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Dany'>Inicial</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Johan'>Johan</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Dayeza'>Dayeza</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Brandon'>Brandon</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Simon'>Simon</Link>
            </li>
            <li className='p-3 rounded-2xl hover:bg-[#ff8482]'>
                <Link to='/Dany'>Dany</Link>
            </li>
        </ul>
    </nav>
  )
}
