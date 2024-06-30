import React,  { useState } from "react";
function Card (){
  const [val,setval]=useState({name:""},{email:""})


 return(
     <div className= "h-screen w-full bg-zinc-100">
          <form action="">
            <input onChange={(event)=>setval({...val,name:event.target.value})} type="text" placeholder='name' id="" />
            <input onChange={(event)=>setval({...val,email:event.target.value})} type="email" placeholder='email' id="" />
          </form>  
        </div>
  
  )
}

export default Card;
