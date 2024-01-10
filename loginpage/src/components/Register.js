import React from 'react'
import App from '../App'

const Register = (props) => {
  return (
   
    <div className='registerPage'>

        <div className='form-container'>
            <h1 className='logo'>LOGO</h1>
            <form className="fit-form-to-container">
                <div className='input-container'>
                    <label htmlFor='Name'>Full Name </label>
                    <input id='Name' type='text' />
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' />
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password' />
                    <div className='gender'>
                        <label>
                            <input type="radio" name="gender" value="male"/>
                            Male
                        </label>
                    
                        <label>
                            <input type="radio" name="gender" value="female"/>
                            Female
                        </label>
                    </div>
                   
                </div>
            
                <button type='submit'>Create</button>
            </form>
            <div className='helpDiv'>
                <button onClick={()=>props.onFormSwitch('login')}>Already have an account</button>
            </div>
        </div>  
    </div>


     
 

  )
}

export default Register

