import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { auth } from '../Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const googleClick = async  () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
   // console.log(result)
    navigate(`/blogs`)
  }
  return (
    <>
  <div className='ml-[30rem] my-[15rem]'>
    <h2 className='my-4' >Please Login with your account</h2>
    <div className='flex gap-4 justify-center cursor-pointer items-center h-[3rem] w-[15rem] bg-teal-800'
    onClick={googleClick}
    >
      <div className='text-[2rem]'> <FaGoogle /> </div>
      <h2>Login with Google</h2>
    </div>
  </div>



    </>
  )
}

export default Login