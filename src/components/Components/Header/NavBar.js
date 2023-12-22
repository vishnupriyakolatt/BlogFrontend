import React, {useState } from 'react'
import User from './User'

import './NavBar.css'
import Blog from '../Blog/Blog'






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
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className='account flexCenter'>
                <User/>
            </div>
        </div>
    </header>
    
    <main>
    <div className="cover-photo">
          <img src='https://marketplace.canva.com/EAFVMyc6M1Y/2/0/1600w/canva-white-collage-travel-blog-facebook-post-BsGxDTqBABE.jpg' alt='Cover' />
        </div>
        <Blog/>
  
    </main>

    
    </>
  )
}

export default NavBar