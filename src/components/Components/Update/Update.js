import React from 'react';
import './Update.css'
import { IoIosAddCircleOutline } from 'react-icons/io';

function Update() {
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img'></div>
          <form>
            <div className='inputfile flexCenter'>
              <label htmlFor='inputfile'>
                <IoIosAddCircleOutline />
              </label>
              <input type='file' id='inputfile' style={{ display: 'none' }} />
            </div>
            <input type='text' placeholder='Title' />
            <textarea placeholder='Write your post...' cols='30' rows='10'></textarea>
            <button className='button' type='submit'>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Update;
