import React from 'react'
import './layout.css'
import { MdOutlineHome } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { getAuth, signInWithEmailAndPassword,signOut  } from "firebase/auth";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"; 



const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  let handlelogout = () =>{
signOut(auth).then(()=>{
  toast("logout done")
  navigate("/")
})
  }
  return (
  <>
  <div className='sidebarBox'>
    <div className='img_box'>
     
    </div>
    <h3 className='username'>Israt Jaman</h3>
    <div>
      <ul className='navigation'>
        <li>
          <NavLink to="/home"><MdOutlineHome /></NavLink>
        </li>
        <li>
          <NavLink to="/message"><AiOutlineMessage /></NavLink>
        </li>
        <li>
          <NavLink to="/notification"><IoMdNotificationsOutline /></NavLink>
        </li>
        <li>
          <NavLink to="/settings"><IoSettingsOutline /></NavLink>
        </li>
      </ul>
    </div>
    <div>
    <button onClick={ handlelogout} className='logout'>Logout</button>
    </div>
  </div>
  </>
  )
}

export default Sidebar