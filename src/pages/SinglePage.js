import React from 'react';
import './details.css';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SinglePage() {
  return (
    <>
      <section className='singlePage'>
        <div className='container '>
          <div className='left'>
            <img src='https://www.fabhotels.com/blog/wp-content/uploads/2019/08/Temple-in-India_600.jpg' alt=''/>
          </div>
          <div className='right'>
            <div className='buttons'>
              <button className='button'>
                <BsPencilSquare />
              </button>
              <button className='button'>
                <AiOutlineDelete />
              </button>
              <Link to='/update' className='button'>
                Update
              </Link>
            </div>

            <input type='text' className='updateInput' />  
            
            <textarea cols='30' rows='10' className='updateInput'></textarea>
        

            {/* <p>
              Author: <Link to='/user-profile'>user name</Link>
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SinglePage;
