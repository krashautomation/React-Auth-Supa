import React, {useEffect, useState} from 'react';
import { SignUp, Login, Homepage } from './pages'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {

const [token,setToken] = useState(false)

if(!token){
  sessionStorage.setItem('token',JSON.stringify(token) )
}

useEffect(() => {
  if (sessionStorage.getItem('token')) {
    let data = JSON.parse(sessionStorage.getItem('token'))  // Added semicolon and fixed assignment
    setToken(data)
  }
}, []);


  return (
    <div>
     
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={<Login setToken={setToken} />} />
       {token?<Route path={'/homepage'} element={<Homepage />} />:""}
      </Routes>
     
            
    </div>
     )
}

export default App