import React from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import SignInForm from 'SignInForm'
const RoutCom = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<App />}/>
        <Route  path='/' element={<SignUpForm />}/>
        <Route  path='/' element={<SignInForm />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default RoutCom