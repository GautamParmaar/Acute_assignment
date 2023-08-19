import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function PartyMaster() {
  const [data,setData]=useState<any[]>([])
  useEffect(()=>{
fetch('http://localhost:3002/PartyMaster').then
(res=>res.json()).then(data=>setData(data))
.catch(err=>console.log(err));
  },[])
  return (
    <>
    <TableContainer sx={{marginTop:'2em'}}>

        <Table size='small'  sx={{width:'30%',ml:'20em' ,border:'2px solid black'}}>
        <TableHead>
    <TableRow>

      <TableCell sx={{fontWeight:'bold'}} colSpan={4} align='center' >PARTY MASTER</TableCell>
      

      

      
      </TableRow>
    </TableHead>
    <TableHead>
        <TableRow>
      <TableCell sx={{fontWeight:'bold'}}>CODE</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>NAME</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>MOBILE NO</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>GSTIN</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>STATE</TableCell>



      </TableRow>
      
    </TableHead>

    <TableBody>
    {data.map((item, index) => (
          

          <TableRow key={index}>
            <TableCell align='center'>{item.CODE}</TableCell>
      <TableCell align='center'>{item.NAME}</TableCell>
      <TableCell align='center'>{item.MOBILE_NO}</TableCell>
      <TableCell align='center'>{item.GSTIN}</TableCell>
      <TableCell align='center'>{item.STATE}</TableCell>

      
          </TableRow>
        ))}
    </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default PartyMaster