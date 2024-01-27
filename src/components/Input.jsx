import { TextField } from '@mui/material'
import React from 'react'

const Input = ({variant,labeltext,style,type,name,onChange,value}) => {
  return (
    <TextField onChange={onChange} value={value} type={type} name={name} className={style} label={labeltext} variant={variant}/>
  )
}

export default Input