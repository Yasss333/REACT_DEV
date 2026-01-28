import React, { useState } from 'react'

const ChaiOrders = () => {
    const [count, setCount]=useState(0)
    return (
    <div>
        <h1>Counter : {count} </h1>
        <button onClick={()=>{
            setCount(prev=>prev+1)
        }}> Click </button>
    </div>
  )
}

export default ChaiOrders   