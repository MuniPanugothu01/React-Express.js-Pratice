import React, { useEffect, useState } from 'react'

const StopC = () => {
    const [count, setCount] = useState(0);


const Increment = (event) =>{
    setCount(count + 1)
}

    useEffect(()=>{
        if(count === 20){
            setCount(0)
        }
    },[count])

  return (
    <>
      <h1>count is: {count}</h1>
      <button onClick={Increment}>Click</button>
    </>
  )
}

export default StopC;
