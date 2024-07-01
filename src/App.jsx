import React, { useState } from 'react';
import axios from 'axios';
const App=()=> {
  const productkey=()=>{
    const api="https://fakestoreapi.com/products";
     axios
      .get(api)
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <>
      <button onClick={()=>productkey()}> CALL</button>
    </>
  )
}

export default App;
