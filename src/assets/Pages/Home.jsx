import React, { useState } from 'react'

const Home = () => {


  const [alu, setAlu] = useState ('this is me first peramitter')



// console.log(alu)




const handleButton = (data)=>{
  console.log(data)
}

  return (
    <>
    <h1>{alu}</h1>
    <button onClick={handleButton('data transfar way')}>show me</button>
    </>
  )
}

export default Home