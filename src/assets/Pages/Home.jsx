import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";



const Home = () => {


  const [Showitems, setshowItems] = useState (true)


const hnadlebutton = ()=>{
  setshowItems(!Showitems)
}

  return (
    <>

    <div className="container pt-5">
    <div className="Update w-fit border-2 p-2 rounded-2xl outlinenone">
      <input className='outline-none' type={Showitems?'text': 'password'} placeholder='Enter your pass...' />


      {
        Showitems?
        <button onClick={()=> setshowItems (false)} ><FaEyeSlash />
</button> 
        :
        <button onClick={()=> setshowItems (true)} ><FaEye />
</button>

      }
    </div>
   
    </div>
    
    </>
  )
}

export default Home