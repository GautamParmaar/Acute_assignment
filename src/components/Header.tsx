import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'
function Header() {
  return (
    <>
    <AppBar  style={{ width:'100%' ,marginLeft :'15em' }}  position="static" >
        <Toolbar sx={{ justifyContent: 'center' }}>
            <Typography >POS</Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header