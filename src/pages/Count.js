import React, { useEffect, useState } from 'react';
export default function Count() {
   const[count,setCount]=useState(0);
   useEffect(()=>{
    const storedCount=localStorage.getItem("pageVisits");
    const initialCount=Number(storedCount)||0;
    setCount(initialCount+1)
    localStorage.setItem("page visis",initialCount+1);
   })
  return (
   <>
   <div>
    <p>{count}</p>
   </div>
   </>
  )
}
