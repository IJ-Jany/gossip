import React from 'react'
import './layout.css'
import { MdOutlineHome } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";





const Sidebar = () => {
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
    <button className='logout'>Logout</button>
    </div>
  </div>
  </>
  )
}

export default Sidebar