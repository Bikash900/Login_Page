import React, { useState } from 'react'
import App from '../App'

function Login(props) {

  return (
    <div className='loginPage'>
        <div className='form-container'>
            <h1 className='logo'>LOGO</h1>
            <form className="fit-form-to-container">
                <div className='input-container'>
                    <label htmlFor='uerName'>Uer Name</label>
                    <input id='userName' type='email'/>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password'/>
                </div>
                    
            
                <button type='submit'>Login</button>
            </form>
            <div className='helpDiv'>
                <button onClick={() => props.onFormSwitch('register')}>New user? click here</button>
            </div>
            
        </div>
      
      
    </div>
  )
}

export default Login
