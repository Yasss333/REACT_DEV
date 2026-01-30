import React, { useState } from 'react'

const useContactForm = () => {
  const[isLoading, setisLoading]=useState(false);
  const[message,setMessage] =useState(null);
  const[error , seterror]=useState(null )
    const submitContact=async(FormData)=>{
      setisLoading(true);
      setMessage(null);
      seterror(null);
      try {
        const res=await fetch("https://httpbin.org/post", {
          method:"POST",
          body:JSON.stringify(FormData)
        })
        const data=await res.json();

        if(!res.ok) throw new Error( data.error ||"Failed to post data"
        ) ; 
        setMessage(data.success || "Message Sent ");
        
      } catch (error) {
        setMessage(error.message || "request failed to load ")
      }
    }
    return {error, isLoading, message, submitContact}
}

export default useContactForm   