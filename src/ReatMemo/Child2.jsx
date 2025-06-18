import React,{memo} from 'react'

const Child2 = (props) => {
    console.log('child2 component can rendering!');
    
  return (
    <>
      <h1>Child-2</h1>
      <p>{props.value}</p>
    </>
  )
}

export default memo(Child2)
