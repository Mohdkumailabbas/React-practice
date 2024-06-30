import React from "react";
function Card ({data ,handleclick,index}){
const{name,artist,img,added}=data;

 return(
    <div className=" mt-10 w-60 bg-white p-4 flex gap-4 pb-12 rounded-md relative">
     <div className="w-20 h-20 rounded-md overflow-hidden">
      <img className="w-full h-full object-cover" src={img} alt="" />
     </div>
     <div className="">
      <h1 className="font-semibold tesxt-xl leading-none capitalize">{name}</h1>
      <h1 className="text-sm capitalize">{artist}</h1>
     </div>
      <button onClick={()=>handleclick(index)} className={`px-4 py-3 ${added===true ? " bg-orange-600" : "bg-teal-600"} absolute text-xs rounded-full -bottom-5 left-20 -translate-x-[50%]-translate-y-[50%] whitespace-nowrap`}>{added=== true ? "added" : "Add to Favourites"}</button>
    </div>
  )
}

export default Card;
