import React, {useState } from 'react'
import User from './User'

import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <>
    <header>
        <div className='scontainer flex'>
            <div className='logo'>
                <img src='https://i.etsystatic.com/22978288/c/2418/1922/0/62/il/b4688b/2316861218/il_340x270.2316861218_q4ud.jpg' alt='logo' width='100px'/>
            </div>
            <nav>
                <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/'>Blog</NavLink></li>
                <li><NavLink to='/'>About</NavLink></li>
                </ul>
            </nav>
            <div className='account flexCenter'>
                <User/>
            </div>
        </div>
    </header>
    
    

    
    </>
  )
}

export default NavBar