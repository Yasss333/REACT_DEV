import React, { useEffect, useState } from 'react'

const Quotemennu = () => {
    const[menu , setmenu]=useState([]);
 
useEffect(()=>{
    fetch("https://api.freeapi.app/api/v1/public/meals")
    .then((res)=>res.json())
    .then((data)=>setmenu(data.data.data))
},[])
     
  return (
    <div>
        <h1>Menu : </h1>
        <ul>    
            {menu.map((e)=>(
      <li key={e.idMeal} > {e.strMeal} </li>
       ))}
        </ul>
    </div>
  )
}

export default Quotemennu           