import React, { useState } from 'react';
function Card(){
   const [val,setval]= useState({name:"card",isbannned:false});
  //  const handlechange=function(){}
  return(
    <>
    <h1 className='px-2 '> Name {val.name}</h1>
    <h1 className='px-2'>bannned: {val.isbannned.toString()}</h1>
   <button  onClick={() => setval({ ...val, isbannned: !val.isbannned})} className='bg-blue-400 rounded-md px-2 py-3'>Change</button>
    </>

  )
}
export default Card;
    /* <button onClick={()=>setval((prev)=>prev+1)} className='bg-blue-400 rounded px-2 py-3'>change</button> */
