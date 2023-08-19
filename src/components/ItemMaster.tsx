import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function ItemMaster() {
  const [data,setData]=useState<any[]>([])
  useEffect(()=>{
fetch('http://localhost:3002/ItemMaster').then
(res=>res.json()).then(data=>setData(data))
.catch(err=>console.log(err));
  },[])
  return (
    <>
    <TableContainer sx={{marginTop:'2em'}}>

        <Table size='small'  sx={{width:'30%',ml:'20em' ,border:'2px solid black'}}>
        <TableHead>
    <TableRow>

      <TableCell sx={{fontWeight:'bold'}} colSpan={4} align='center' >ITEM LIST</TableCell>
      

      

      
      </TableRow>
    </TableHead>
    <TableHead>
        <TableRow >
      <TableCell sx={{fontWeight:'bold'}}>CODE</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>NAME</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>PURCHASE PRICE</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>SALE PRICE</TableCell>


      </TableRow>
      
    </TableHead>

    <TableBody>
    {data.map((item, index) => (
          

          <TableRow key={index}>
            <TableCell align='center'>{item.CODE}</TableCell>
      <TableCell align='center'>{item.NAME}</TableCell>
      <TableCell align='center'>{item.PURCHASE_PRICE}</TableCell>
      <TableCell align='center'>{item.SALE_PRICE}</TableCell>
      
          </TableRow>
        ))}
    </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}

export default ItemMaster