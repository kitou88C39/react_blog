//import React, { Component } from 'react';
const Login = () => {
  return (
    <form>
      <h3>Sign In</h3>
      <div className='mb-3'>
        <label>Nick Name</label>
        <input
          type='nick name'
          className='form-control'
          placeholder='Nick Name'
        />
      </div>
      <div className='mb-5'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
        />
      </div>
      <div className='mb-3'>
        <div className='d-grid'>
          <button type='submit' className='btn btn-outline-dark'>
            Submit
          </button>
        </div>
      </div>
      {/* <p className='forgot-password text-right'>
        Forgot <a href='#'>password?</a>
      </p> */}
    </form>
  );
};

export default Login;
