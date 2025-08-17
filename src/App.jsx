import React, { useState } from 'react'

const App = () => {

  const [formData,setFormData] = useState({
    fullName:'',
    email:'',
    password:''
  })

function handleChange(event){
   
}

  return (
    <div><form>
      <input placeholder='fullname'
      name='fullName'
      onChange={handleChange}/>

<input placeholder='Email'
name='email'
onChange={handleChange}/>

      <input placeholder='Password'
      name='password'
      onChange={handleChange} />

      <button type='submit'>
Submit
      </button>
      
    </form>
    </div>
  )
}

export default App