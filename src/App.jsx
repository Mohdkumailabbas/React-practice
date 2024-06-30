import React, { useState } from 'react';
import Card from './Components/Card';
import Nav from './Components/Nav'
function App() {
    const data=[
        {name:"orry",artist:"arjit",img:"https://images.unsplash.com/photo-1718879329786-559f88f2279d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"choory",artist:"sushant",img:"https://images.unsplash.com/photo-1718248028292-81839c7bec69?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"morriy",artist:"suar",img:"https://images.unsplash.com/photo-1718721810004-a486df204cc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",added:false},
        {name:"soorry",artist:"chaur",img:"https://images.unsplash.com/photo-1719498481776-8616359f0df4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",added:false}
    ]
    const handleclick=(index)=>{
      setdata((prev)=>{
       return prev.map((item,itemindex)=>{
          if(itemindex=== index) return {...item ,added:!item.added} 
           return item
        })
        
      })
    } 
    const [realdata,setdata]=useState(data)
    return (
        <div className= "h-screen w-full bg-zinc-100">
           <Nav realdata={realdata}/>
           <div className='px-20   flex gap-5 flex-wrap'>
           {realdata.map((obj, index) => (
                    <Card data={obj} key={index} handleclick={handleclick} index={index}/>
                ))}
           </div>
        </div>
    )
}
export default App;