import React from 'react'

const App = () => {

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
      
    </form>
    </div>
  )
}

export default App