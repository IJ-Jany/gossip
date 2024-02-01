import React from 'react'
import './layout.css'
import { MdOutlineHome } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { getAuth, signInWithEmailAndPassword,signOut  } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import 'react-toastify/dist/ReactToastify.css'; 
import Image from '../../utils/Image';
import { ToastContainer, toast } from 'react-toastify';


const Sidebar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let handlelogout = () =>{
signOut(auth).then(()=>{
  toast("logout done")
  navigate("/")
  toast.success('Logout Successfully', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
})
  }
  const userinfo = auth.currentUser;
  console.log(userinfo.displayName);
  return (
  <>
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  <div className='sidebarBox'>
    <div className='img_box'>
     <Image source={userinfo && userinfo.photoURL}/>
    </div>
    <h3 className='username'>{userinfo && userinfo.displayName}</h3>
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