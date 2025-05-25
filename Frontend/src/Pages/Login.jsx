import React from 'react'

const Login = () => {
  const [currentState, setCurrentState] = React.useState('Sign Up')

  const submitHandler =  async (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
       </div>
       {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required/>}
       <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required/>
       <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required/>
       <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forget your Password</p>
          {
            currentState === 'Login' ?
            <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> :
            <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login</p>
          }
       </div>
       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Sign Up' ? 'Sign Up' : 'Sign In'}</button>
    </form>
  )
}

export default Login
