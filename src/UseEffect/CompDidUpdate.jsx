import React, { useEffect, useState } from 'react'

const CompDidUpdate = () => {
    const [count, setCount] = useState();

    useEffect(()=>{
        setTimeout(() => {
            const Increment = (event) =>{
                setCount(count + 1)
            }
        },2000);
    })
  return (
    <>
    <p>when ever click the button count will increas, then after useEffect logic also changeed</p>
    <p>count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </>
  )
}

export default CompDidUpdate
