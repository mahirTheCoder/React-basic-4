import React, { useState } from 'react'

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
        <button onClick={()=> setshowItems (false)} >hide</button> 
        :
        <button onClick={()=> setshowItems (true)} >show</button>

      }
    </div>
   
    </div>
    
    </>
  )
}

export default Home