import React, { useState } from 'react';
function Card(){
  const [val,setval]= useState([
    {name:"kum",age:32},
    {name:"um",age:33},
    {name:"m",age:52} 
  ])
   return(
   <>
     {val.map((elem)=>(
       <div>
         <h1>{elem.name}</h1>
         <h1>{elem.age}</h1>
       </div>
     ))}
   </>
   )
}
export default Card;
// {/* <button onClick={() => setval(val.filter((elem, index) => index!==2))}>click</button> */}
// <button onClick={() => setval(val.filter((elem, index) => index !== val.length - 1))}>click</button>
// /* <button onClick={()=>setval(()=>val.filter((item=> item%2!==0)))}> check</button> */}
// <button onClick={()=>setval(()=>val.map(item=> item.name=== "um"?({name:"um",age:7}):item))}>add</button>