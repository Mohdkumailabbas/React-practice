import React, { useState } from "react";
function Card() {
  const [val, setval] = useState({ name: "Card", isbanned: false });

  return (
    <>
      <h1 className="px-2">{val.name}</h1>
      <h1 className="px-2">{val.isbanned.toString()}</h1>
      <button
        onClick={() => setval({ ...val, isbanned: !val.isbanned })}
        className={`px-2 py-3 ${
          val.isbanned ? "bg-blue-800" : "bg-red-300"
        } rounded-md`}
      >
        chnge
      </button>
    </>
  );
}
export default Card;
// const handelclick=()=>{
//   setval(prevval =>({...prevval,age:prevval.age+1}))
//  }
