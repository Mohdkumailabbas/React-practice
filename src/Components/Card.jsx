import React from "react";
 function Card(){
    return(
        <div className="w-full h-screen bg-zinc-300">
          <div className="  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md bg-zinc-100 overflow-hidden">
            <div className="w-full h-32 bg-zinc-100">
              <img className="w-full h-full object-cover " src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww" alt="" />
            </div>
              <div className="w-full px-3 py-4 bg-zinc-200">
                <h2 className="font-semibold"> Amazon basics</h2>
                <p className="text-xs mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque culpa debitis dolores.</p>
              </div>
            
          </div>
        </div>
    )
 }
export default Card;