import React from 'react'
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai"
import { Link } from "react-router-dom"
import './Blog.css'
function Blog() {
  return (
   <>
   
   <section className='blog'>
        <div className='container grid3'>
       
            <div className='box boxItems' >
              <div className='img'><img src='https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
              <div className='details'>
                <div className='tag'>
                </div>
                <Link>
                  <h3>title</h3>
                </Link>
                <p>decs</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>Date</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineHeart  className='icon' /> <label htmlFor=''>14</label>
                </div>
              </div>
            </div>
       
        </div>
      </section>
   </>
  )
}

export default Blog