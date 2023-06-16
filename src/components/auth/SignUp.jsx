import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../Firebase';

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
    <div className='sing-in-container'>
        <form action="" onSubmit={singUp}>
            <h1>Create Account</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SingUp