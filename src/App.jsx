import React from 'react'
import { SignUp, Login } from './pages'; 
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/'} element={<Login />} />
      </Routes>
            
    </div>
     )
}

export default App