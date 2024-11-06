import React from 'react'


const Login = () => {
  return (
    <div className='auth'>
     
      
          <p><em><marquee>Facilitating connections between volunteers and organizations</marquee></em></p>
    
      
        <h1> Login</h1>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password'/>
            <p></p>
            <button>Login</button>
            <p><b>This is an error!</b></p>
            <span><b>Don't you have an account??</b><a href="/register">Register</a></span>
        </form>
     </div>
  )
}

export default Login
