import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../Firebase';
import "../../styles/components/signUp.scss"

const SingUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

    // useEffect(() => {
    //     console.log(email  password);
    // }, [email, password])

  return (
    <div className='sing-up-container'>
        <div className='sing-up-field'>
            <img src="./images/btc-bg.png" id='btc-bg' alt="" />
            <img src="./images/tz-bg.png" id='tz-bg' alt="" />
            <img src="./images/doge-bg.png" id='doge-bg' alt="" />
            <form className='sign-up-content' action="" onSubmit={singUp}>
                <h1 className='sing-up-title'>Create Account</h1>
                
                <input className="input-field" type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="input-field" type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="input-field" type="password" placeholder='Confirm password'/>
                <button className='submit-button' type='submit'>Sign Up</button>
            </form>
        </div>
        <div className='login-content'>
            <p className='login-text'>Already have an account?</p>
            <a href="">Log In</a>
        </div>
    </div>
  )
}

export default SingUp