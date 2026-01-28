import React, { useState } from 'react'
import ChaiOrders from './ChaiOrders'

function App() {

  const [quote, setQuote]=useState("Old is gold ")


   useState(()=>{
       fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
       .then((res)=>res.json())
       .then((mahiti)=>setQuote(mahiti.data.content
       ))
       .catch((e)=>setQuote(e))
   },[])

  return (
    <div>
      <h1>Hey </h1>
      <h6>Yash here </h6>
      <h3>{quote}</h3>
      <ChaiOrders/>
    </div>
  )
}

export default App
