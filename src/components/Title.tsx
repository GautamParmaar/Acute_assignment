import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material'

import Box from '@mui/material/Box';


function Title() {
    

  return (
    <>
     <Box >
     <AppBar  style={{ backgroundColor:' #00b0ff',width:'100%' ,marginTop:'-3em'  }} position="static"  >
       
        <Toolbar >
            <Typography sx={{ justifyContent: 'center',ml:"40.5em" }} >SHREE FABRIC PVT ltd</Typography>
            <Typography sx={{ ml:"15em" }} >UserName : ABC</Typography>
            <Typography sx={{ ml:"18em" }}> Logout </Typography>
        
            
       
            


        </Toolbar>
       
    </AppBar>
    </Box>
   
    </>
  )
}

export default Title