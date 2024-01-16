import { Box, Grid } from '@mui/material'
import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'

const Registration = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
      <Grid item xs={6}>
     <div className='loginbox'>
      <div className='loginbox_inner'>
      <SectionHeading style="auth_heading"  text=" Get started with easily register "/>
      <div className='form_main'>
      <Input name="email" type="email" style="login_input_field" labeltext="Email Adress" variant="outlined"/>
      <Input name="fullname" type="text" style="login_input_field" labeltext="Full Name" variant="outlined"/>
      <Input name="password" type="password" style="login_input_field" labeltext="Password" variant="outlined"/>
      <CustomButton styling="loginbtn" variant="contained" text="Sign up"/>
      </div>
      <AuthNavigate style="loginauth" link="/" linktext="sign in" text="Already have an account?"/>
      </div>
     </div>
      </Grid>
      <Grid item xs={6}>
       <div className='loginimg'>
      
       </div>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Registration