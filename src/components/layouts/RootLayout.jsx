import { Box, Grid } from '@mui/material'
import React from 'react'
import './layout.css'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'




const RootLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
      <Grid item xs={2}>
    <Sidebar/>
     </Grid>
      <Grid item xs={10}>
        <div className='outletbox'>
          <Outlet/>
        </div>
      </Grid>
    </Grid>
  </Box>
  )
}

export default RootLayout