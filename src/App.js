import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot_password' element={<ForgotPassword/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App