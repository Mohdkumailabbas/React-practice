import React from "react";
import { element } from "three/examples/jsm/nodes/Nodes.js";
 function Card(){
  const data =[
    { image:"https://images.unsplash.com/photo-1624521793559-136bfe16fc86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",name:"Amazon basics",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque culpa debitis dolores",instock:true},
    {image:'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFpbHklMjBvYmplY3RzfGVufDB8fDB8fHww',name:"Daily Objects",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque culpa debitis dolores",instock:true},
    {image:'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D',name:'Apple',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque culpa debitis dolores',instock:false}
  ]
    return(
        <div  className="w-full h-screen gap-2 flex items-center justify-center bg-zinc-300">
         {data.map((element,index)=>(
            <div key={index} className="w-52 h-fit  py-2  rounded-md bg-zinc-100 overflow-hidden">
            <div className="w-full h-32 bg-zinc-100">
              <img className="w-full h-full object-cover " src={element.image} alt="" />
            </div>
              <div className="w-full px-3 py-4 bg-zinc-200">
                <h2 className="font-semibold"> {element.name}</h2>
                <p className="text-xs mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque culpa debitis dolores.</p>
                <button className={` rounded mt-2 px-2 ${element.instock ? 'bg-blue-600' : 'bg-red-600'} text-white`} >
                  {element.instock ?"In Stock..":"Out of Stock"}
                </button>
              </div>
            
          </div>
         ))}
        </div>
    )
 }
export default Card;