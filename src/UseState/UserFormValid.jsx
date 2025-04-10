import React, { useState } from 'react'

const UserFormValid = () => {
// useState first name
const [FirstName, setFirstName] = useState('');
// first name error useState
const [firstError, setFirstError] = useState('')

    return (
    <>
<h1>Form validataion!</h1>
    </>
  )
}

export default UserFormValid;
