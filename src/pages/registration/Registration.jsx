import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/Input'
import CustomButton from '../../components/CustomButton'
import AuthNavigate from '../../components/AuthNavigate'
import Alert from '@mui/material/Alert';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { ColorRing } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";



const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loader,setLoader] = useState(false)
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
    setLoader(true)
    setError({
       email:"",
       fullname:"",
       password:""
    })
    createUserWithEmailAndPassword(auth,signupData.email,signupData.password).then((userCredential)=>{
      sendEmailVerification(auth.currentUser).then(()=>{

      }) 
      navigate("/")
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode == "auth/email-already-in-use"){
        setError({email:"Email already exist"})
      }else{
        setError({email:""})
      }
      console.log(errorMessage);
    })
    setSignupData({
      email:"",
      fullname:"",
      password:""
    })
    setTimeout(()=>{
      setLoader(false)
    },2000)
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
        <Input onChange={handleForm} name="email" value={signupData.email} type="email" style="login_input_field" labeltext="Email Adress" variant="outlined"/>
        {error.email &&
        <Alert severity="error">{error.email}</Alert>
        }
        </div>
        <div>
        <Input onChange={handleForm} name="fullname"  value={signupData.fullname}  type="text" style="login_input_field" labeltext="FullName" variant="outlined"/>
        {error.fullname &&
        <Alert severity="error">{error.fullname}</Alert>
        }
        </div>
        <div>
        <Input onChange={handleForm} name="password"  value={signupData.password}  type="password" style="login_input_field" labeltext="Password" variant="outlined"/>
        {error.password &&
        <Alert severity="error">{error.password}</Alert>
        }
        </div>
        {loader ?
       <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="color-ring-loading"
       wrapperStyle={{}}
       wrapperClass="color-ring-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
       />
       :
       <CustomButton onClick={handleSubmit} styling="loginbtn" variant="contained" text="Sign up"/>
      }
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