import React, { useEffect, useState } from 'react'

const SwitchCase = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();

    // operation the buttons which button we are using to click the button
    const [operation, setOperation] = useState(null);

    useEffect(()=>{
if(operation){
    let Number1 = Number(num1);
    let Numbre2 = Number(num2);
}
    },operation,num1,num2)
  return (
    <>
      
    </>
  )
}

export default SwitchCase;
