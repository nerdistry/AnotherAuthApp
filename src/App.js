import React from "react"
import Signup from "./components/Signup"
import { Routes, Route, Router } from 'react-router-dom'
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import { AuthContextProvider } from './contexts/AuthContext'



function App() {
  return (

      <Router>

      <AuthContextProvider>

      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<PrivateRoute />}/>
      <Route index element={<Dashboard />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>

    </AuthContextProvider>
    
    </Router>

  )
}

export default App;