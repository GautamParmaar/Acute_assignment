import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function PurchaseEntry() {
  const [data,setData]=useState<any[]>([])
  useEffect(()=>{
fetch('http://localhost:3002/purchaseEntry').then
(res=>res.json()).then(data=>setData(data))
.catch(err=>console.log(err));
  },[]) //for sale entry

  const [getInfo,setInfo]=useState<any[]>([])
  useEffect(()=>{
fetch('http://localhost:3002/purchaseEntryRegister').then
(res=>res.json()).then(getInfo=>setInfo(getInfo))
.catch(err=>console.log(err));
  },[])

 
  return (
    
    <>
  <TableContainer sx={{marginTop:'2em'}}>
   <Table size='small'  sx={{width:'30%',ml:'20em' ,border:'1px solid black'}} >
   <TableHead>
    <TableRow>

      <TableCell sx={{fontWeight:'bold'}} >DOC NO</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>DATE</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>PARTY</TableCell>

      

      
      </TableRow>
    </TableHead>
    <TableBody>
    {getInfo.map((item, index) => (
          

          <TableRow key={index}>
            <TableCell>{item.DOC_NO}</TableCell>
      <TableCell>{item.DATE}</TableCell>
      <TableCell>{item.PARTY}</TableCell>
      
          </TableRow>
        ))}
    </TableBody>

    
    
     
   </Table>
   </TableContainer>


   <TableContainer sx={{marginTop:'2em', }}>
   <Table size='medium'  sx={{width:'50%',ml:'20em' ,border:'2px solid black'}}> 
   <TableHead>
    <TableRow>

      <TableCell sx={{fontWeight:'bold',border:'1 px solid black'}}>ITEM CODE</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>QTY</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>Rate(LP)</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>GST(%)</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>GST AMT</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>TOTAL</TableCell>
      <TableCell sx={{fontWeight:'bold'}}>MRP</TableCell>

      

      
      </TableRow>
    </TableHead>

    <TableBody>
    {data.map((item, index) => (
          

          <TableRow key={index}>
            <TableCell>{item.ITEM_CODE}</TableCell>
      <TableCell>{item.QTY}</TableCell>
      <TableCell>{item.RATE}</TableCell>
      
      <TableCell>{item.GST}</TableCell>
      <TableCell>{item.GST_AMT}</TableCell>
      <TableCell>{item.TOTAL}</TableCell>
      <TableCell>{item.MRP}</TableCell>
          </TableRow>
        ))}
    </TableBody>
   
   </Table>
   </TableContainer>

    </>
  )
}

export default PurchaseEntry