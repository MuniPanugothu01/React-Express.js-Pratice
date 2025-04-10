import React, { useState } from 'react'

const EmailValid = () => {

const [email, setEmail] = useState('')
// error display useState
const [error, setError] = useState('')

    const HandleMail  = (event) =>{
setEmail(event.target.value);
    }

    const HandleValid = (event) =>{
        const RegMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email === '' || email === null){
            setError('mail cant be empty!')
        }
        else if(email.length < 3){
            setError('email more than 3 characters!')
        }
        else if(RegMail.test(email)){
            setError('email atleast special character!')
        }
    }
  return (
    <>
      <h1>Email Validate</h1>
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' value={email} onChange={HandleMail}/>
      <button onClick={HandleValid}>ValidEmail</button>

      {error && <span style={{color:'red'}}>{error}</span> }
    </>
  )
}

export default EmailValid;
