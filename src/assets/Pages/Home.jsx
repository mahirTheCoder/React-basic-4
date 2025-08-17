import React, { useState } from 'react'

const Home = () => {


  const [Showitems, setshowItems] = useState (false)

 console.log(Showitems)

  if(Showitems){
    
  }

const hnadlebutton = ()=>{
  
}

  return (
    <>

    <div className="container pt-5">

    {
      Showitems?
      <h1>Part one</h1>
      :
      <h1>Part two</h1>

    }
    <button onClick={hnadlebutton} >Changes</button>
    </div>
    
    </>
  )
}

export default Home