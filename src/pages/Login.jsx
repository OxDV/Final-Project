import React from 'react'
import "../styles/pages/login.scss"
import SingIn from '../components/auth/SingIn'
import AuthDetails from '../components/AuthDetails'

export default function Login() {
  return (
    <div className='login-container'>
      <SingIn/>
      <AuthDetails/>
    </div>
  )
}
