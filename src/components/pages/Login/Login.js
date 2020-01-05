import React from 'react';
import './login.scss';
const Login = () => {
  return (
    <div className='login'>
      <div className='login-card'>
        <div className='header'>Login</div>
        <form className='login-form'>
          <input className='login-input' type='text' placeholder='Username' />
          <input className='login-input' type='text' placeholder='Password' />
          <button className='btn primary'>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
