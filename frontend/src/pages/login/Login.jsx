import {useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js'

const Login = () => {
  const [username,setusername]=useState("")
  const[password,setPassWord]=useState("")
  const {loading,login}=useLogin()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    await login(username,password)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
      <h1 className='text-3xl font-semibold text-center text-gray-100'>
        <span className=' text-gray-800'>ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-black'>UserName</span>
          </label>
          <input type='text' placeholder="Enter username" className='w-full input input-broadend h-10 text-black bg-gray-100'value={username} onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div >
          <label className='label p-2'>
            <span className='text-base label-text text-black'>Password</span>
          </label>
          <input type='password' placeholder="Enter password" className='w-full input input-broadend h-10 text-black bg-gray-100' value={password} onChange={(e)=>setPassWord(e.target.value)}/>
        </div>
        <div>
          <button className='btn btn-block btn-glass btn-sm mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center' disabled={loading}>
            {loading?<span className='loading loading-spinner'></span>:'Login'}</button>
        </div>
        <a href='/signup' className="pt-3 flex justify-center text-sm hover:underline hover:text-blue-500 text-gray-800">{"Don't"} have an account?</a>
      </form>
      </div>
    </div>
  )
}

export default Login


//Starter code for this page
// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
//       <div className='w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
//       <h1 className='text-3xl font-semibold text-center text-gray-100'>
//         <span className='text-blue-300'>ChatApp</span>
//       </h1>
//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>UserName</span>
//           </label>
//           <input type='text' placeholder="Enter username" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <div >
//           <label className='label p-2'>
//             <span className='text-base label-text text-black'>Password</span>
//           </label>
//           <input type='password' placeholder="Enter password" className='w-full input input-broadend h-10 text-black bg-gray-100'/>
//         </div>
//         <div>
//           <button className='btn btn-block btn-glass btn-sm mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-center'>Login</button>
//         </div>
//         <a href='#' className="pt-3 flex justify-center text-sm hover:underline hover:text-blue-500 text-gray-800">{"Don't"} have an account?</a>
//       </form>
//       </div>
//     </div>
//   )
// }

// export default Login