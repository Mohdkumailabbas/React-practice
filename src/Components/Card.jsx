import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";

function Card(){
  const[val,setval]=useState(false);
  return(
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center">
      <div className="w-60 relative h-32 bg-zinc-500 rounded-md overflow-hidden flex">
       <img className={`w-full h-full transition-transform object-cover ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} shrink-0 `} src="https://images.unsplash.com/photo-1719328473051-3bea976b70e8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
       <img className={`w-full h-full transition-transform  ${val===true ? "-translate-x-[100%]" : "-translate-x-[0%]"}  shrink-0`} src="https://images.unsplash.com/photo-1684780432703-1db547e01b7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
        <span onClick={()=>setval(()=>!val)} className="h-10 w-10 rounded-lg bg-[#dadada8b]  flex items-center justify-center absolute   bottom-[0%] left-1/2 -translate-x-[50] -translate-y-[50]">
         <FaReact size={"1.5em"}/>
        </span>
        
      </div>
    </div>
  )
}
export default Card;

// {`w-full h-full  object-cover shrink-0 -translate-x-[0%]`}
// {`w-full h-full object-cover shrink-0 -translate-x-[0%]`}




















// {/* <button onClick={() => setval(val.filter((elem, index) => index!==2))}>click</button> */}
// <button onClick={() => setval(val.filter((elem, index) => index !== val.length - 1))}>click</button>
// /* <button onClick={()=>setval(()=>val.filter((item=> item%2!==0)))}> check</button> */}
// <button onClick={()=>setval(()=>val.map(item=> item.name=== "um"?({name:"um",age:7}):item))}>add</button>