import React, { useEffect } from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { loginuser } from '../../slices/userslice';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Sidebar = () => {
  const data = useSelector((state) => state.loginuserdata.value)
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const[open,setOpen]=React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    if(!data){
      navigate("/")
    }else{
      navigate("/home")
    }
    },[]);

    let handlelogout = () =>{
      signOut(auth).then(()=>{
        localStorage.removeItem("user")
        dispatch(loginuser(null))
        toast("logout done");
        navigate("/");
        setTimeout(()=>{
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
        },600);
      });
        };

  return (
  <>

  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <h2>Upload Profile photo</h2>
      <div className='imgholder'>
        <Image source={data && data.photoURL} alt="img" />
      </div>
      <input type='file'/>
    </Box>
   </Modal>
    

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
     <Image source={data && data.photoURL}/>
     </div>
   <h3 className='username'>{data && data.displayName}</h3>
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
  );
};


export default Sidebar