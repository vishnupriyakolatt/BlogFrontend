import React, { useContext, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { RiImageAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const User = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };

  

  return (
    <div className="profile">

        <>
          <button
            className="profile-image"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt="Profile" />
          </button>
          {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
              <Link to={"/account"} className="profile-link">
                <div className="image">
                  <div className="img">
                    <img src="https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png" alt="Profile" />
                  </div>
                  <div className="text">
                    <h4></h4>
                    <label>Los Angeles, CA</label>
                  </div>
                </div>
              </Link>
              <Link to="/create">
                <button className="box">
                  <RiImageAddLine className="icon" />
                  <h4>Create Post</h4>
                </button>
              </Link>
              <button className="box">
                <IoSettingsOutline className="icon" />
                <h4>My Account</h4>
              </button>
              <button className="box">
                <BsBagCheck className="icon" />
                <h4>My Blogs</h4>
              </button>
              <button className="box" >
                <BiLogOut className="icon" />
                <h4>Log Out</h4>
              </button>
            </div>
          )}
        </>
  
        {/* <Link to="/login">
          <button>Login</button>
        </Link> */}
     
    </div>
  );
};

export default User;
