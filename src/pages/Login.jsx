import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';


const Login = () => {

  const [formData,setFormData] = useState({
    email:'',
    password:''
  })

console.log(formData)


function handleChange(event){
   setFormData(prevFormData=>{
    return{
      ...prevFormData,
      [event.target.name]:event.target.value
    }
   })
}

async function handleSubmit(e){

  e.preventDefault()
 try {
  
const { data, error } = await supabase.auth.signInWithPassword({
  email: formData.email,
  password: formData.password,
})

console.log(data)
// alert('Check your email for verification link')

 } catch (error) {
  alert(error)
  
 }

}

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
   
<input placeholder='Email'
name='email'
onChange={handleChange}/>

      <input placeholder='Password'
      name='password'
      onChange={handleChange} 
      type='password'
      minLength='6'/>

      <button type='submit'>
Submit
      </button>
      
    </form>
           
    <p>Need to create an account? <Link to='/signup'>Signup</Link></p>
    </div>
  )
}

export default Login