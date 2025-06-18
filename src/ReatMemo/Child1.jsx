import React, { memo } from 'react'

const Child1 = (props) => {
    console.log('child 1 component can rendering!')
  return (
    <>
      <h1>Child-1</h1>
      <p>{props.value}</p>
    </>
  )
}

export default React.memo(Child1)
