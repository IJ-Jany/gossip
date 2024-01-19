import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({variant,text,styling,onClick}) => {
  return (
<Button onClick={onClick} className={styling} variant={variant}>{text}</Button>
  )
}

export default CustomButton