import React from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import "./login.css"
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg'
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg'
import Image from '../../utils/Image';
import { useState } from 'react';
import { Modal, Typography } from '@mui/material';

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


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});

const Login = () => {
  let [passShow,setPassShow] =useState(false)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleModalClose = () =>{
    setOpen(false)
  }
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
       <div className='loginbox'>
        <div className='loginbox_inner'>
        <SectionHeading style="auth_heading"  text="Login to your account!"/>
        <div className='provider_login'>
      <img src={GoogleSvg}/>
      <span>Login with Google</span>
        </div>
        <div className='form_main'>
          <div>
          <Input name="email" type="email" style="login_input_field" labeltext="Email Adress" variant="standard"/>
          </div>
          <div>
          <Input name="password" type={passShow ? "text" : "password"} style="login_input_field" labeltext="Password" variant="standard"/>
          <button onClick={()=>setPassShow(!passShow)}>show</button>
          </div>
        <CustomButton styling="loginbtn" variant="contained" text="Login to Continue"/>
        </div>
        <AuthNavigate style="loginauth" link="/registration" linktext="sign up" text="Don’t have an account ? "/>  
        <p style="loginauth">
        <span onClick={handleOpen}>Forget Password?</span>
        </p>
        </div>
       </div>
        </Grid>
        <Grid item xs={6}>
         <div className='loginimg'>
          <Image source={LoginImg} alt="img" />
         </div>
        </Grid>
      </Grid>
    </Box>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
      <div className='forget_box'>
        <button onClick={handleModalClose}>Close</button>
      <h2>forget password</h2>
      <Input type="emaiL" labeltext="Email Address" variant="standard"/>
      <CustomButton text="Send Link" variant="contained"/>
      </div>
        </Box>

</Modal>

    </>
   
  )
}

export default Login