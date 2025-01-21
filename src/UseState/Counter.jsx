import React, { useState } from 'react'

const Counter = () => {
    const [state,setState] = useState(0)
    increament(){
        setState(state + 1)
    }
  return (
    <>
 <h1>Counter:</h1>
 <button onClick={increament}>Increament!</button>     
    </>
  )
}

export default Counter
