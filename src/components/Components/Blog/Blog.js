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
              <div className='img'><img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/15-budget-friendly-places-to-celebrate-new-years-in-india-2024-113539353-1x1.jpg?VersionId=BKRiGzZ8r4W3wqzdgbPbZC682ao0vJ.e'/></div>
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