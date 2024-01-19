import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Alert from '@mui/material/Alert';
 





const Registration = () => {

  let [error,setError] = useState ({
  email:"",
  fullname:"",
  password:""
})

let [signupData,setSignupData] = useState ({
  email:"",
  fullname:"",
  password:""
})

let emailregex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let handleSubmit =() => {
   if(!signupData.email){
   setError({email:"Enter Your Email Address"})
   }
   else if(!signupData.email.match(emailregex)){
    setError({email:"Enter A Valid Email"})
   }
   else if (!signupData.fullname){
    setError({fullname:"Enter Your Name"})
   }else if (!signupData.password){
    setError({password:"Enter Your Password"})
   }else{
    setError({
       email:"",
  fullname:"",
  password:""
    })
    console.log("All done");
   }
}

let handleForm =(e) => {
  let {name,value} = e.target
  setSignupData({
    ...signupData,[name]:value
  })
}
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
      <Grid item xs={6}>
     <div className='loginbox'>
      <div className='loginbox_inner'>
      <SectionHeading style="auth_heading"  text=" Get started with easily register "/>
      <div className='form_main'>
        <div>
        <Input onChange={handleForm} name="email" type="email" style="login_input_field" labeltext="Email Adress" variant="outlined"/>
        {error.email &&
        <Alert severity="error">{error.email}</Alert>
        }
        </div>
        <div>
        <Input onChange={handleForm} name="fullname" type="text" style="login_input_field" labeltext="FullName" variant="outlined"/>
        {error.fullname &&
        <Alert severity="error">{error.fullname}</Alert>
        }
        </div>
        <div>
        <Input onChange={handleForm} name="password" type="password" style="login_input_field" labeltext="Password" variant="outlined"/>
        {error.password &&
        <Alert severity="error">{error.password}</Alert>
        }
        </div>
      <CustomButton onClick={handleSubmit} styling="loginbtn" variant="contained" text="Sign up"/>
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