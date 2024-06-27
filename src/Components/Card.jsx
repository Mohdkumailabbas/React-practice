import React from 'react';
function Card(){
  const data =[
    {name :"Mahiya Ve",description:"three points and  three points"},
    {name :"Junun",description:"tcfv vrvr vrvrvrv"},
    {name :"Barish",description:"tvrvr rvrv  rv three points"},
  ]
  const handleclick= function(){
    alert("hehehahaha");
  }
  return(
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center'> 
     {data.map((elem,index)=>(
      <div className='px-3 py-2 w-60 bg-zinc-100 '>
      <h3 className='font-semibold text-xl'>{elem.name}</h3>
      <p className='text-sm mt-2'>{elem.description}</p>
      <button onClick={handleclick} className='bg-blue-400 px-2 mt-1 rounded-md text-white'>Download Now...</button>
     </div>
     ))}
    </div>
  )
}
export default Card;