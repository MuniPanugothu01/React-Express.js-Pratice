import React, { useState } from 'react'

const TodoList = () => {
    const [input, setinput] = useState(0);
    // to store the values while entering in input box
    const [store, setStore] = useState([])

    const handleInput =(event) =>{
        setinput(event.target.value)
    }
    const Submit = (event) =>{
        event.preventDefalut();
        setStore([...store,input])
    }

    {
        const data = store.map((item)=>
     <li>{item}</li> 
        )
    }
  return (
    <>
      <form action=""  onSubmit={Submit}>
        <input type="text" onChange={handleInput} value={input} />
        <input type="submit" />
      </form>
      
        <ul>
            {data}
        </ul>
      
    </>
  )
}

export default TodoList;
