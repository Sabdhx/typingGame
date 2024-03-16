import React, { useState } from 'react'

function Toggling() {
  const [one , setone]=useState("bg-white")
 function toggling(){
  console.log("hey");
   
   let value=true;

  if(one === "bg-white"){

    setone("bg-black")
 
  }
  
  else
  
  {
    
    setone("bg-white")

  }
 
}
 return (
    <div className={`h-screen w-screen ${one}`}>
     <button className={`bg-gray-400 px-5 py-2 rounded-lg block`} onClick={()=>{
      toggling()
      
     }}>click</button>
    </div>
  )
}

export default Toggling