import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../Firebase';

const SingIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
        <form action="" onSubmit={singIn}>
            <h1>Log In to your Account</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default SingIn