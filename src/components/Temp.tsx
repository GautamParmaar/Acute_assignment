import React, { useEffect, useState } from 'react'

function Temp() {
  const [data,setData]=useState<any[]>([])
  useEffect(()=>{
fetch('http://localhost:3002/user').then
(res=>res.json()).then(data=>setData(data))
.catch(err=>console.log(err));
  },[])
  return (
   <>
   <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>QTY</th>
    </thead>

    <tbody>
      
    {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.Name}</td>
            
          </tr>
        ))}
    </tbody>
   </table>
   
   </>
  )
}

export default Temp