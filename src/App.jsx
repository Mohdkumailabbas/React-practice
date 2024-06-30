import React, { useRef, useState } from 'react';
import Card from './Components/Card';
import Nav from './Components/Nav'
function App() {
     const name =useRef(null)
     const age =useRef(null)
    const handlesubmit=(details)=>{
        details.preventDefault();
       console.log(name.current.value)
    };
    return (
        <div className= "h-screen w-full m-2 bg-zinc-100">
          <form action="" onSubmit={handlesubmit}>
           <input ref={name} type="text" placeholder='name' />
           <input ref={age} type="text" placeholder='age' />
           <input type="submit" />
          </form>  
        </div>
    )
}
export default App;