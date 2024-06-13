import React, { useState } from 'react'
import Navbar from './Navbar'
import {db} from '../Firebase';
import {addDoc, collection} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
  const navigate = useNavigate()
  const auth = getAuth()
  const [formData, setFormData] = useState({
    title: "",
    shortDesc : '',
    fullDesc : '',
    img : '',
    authorName : auth.currentUser.displayName,
    authorImg : auth.currentUser.photoURL
  })
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
    //console.log(formData.title);
  }

  const formRef = collection (db, 'blog')

  const submitHandler =  async (e) => {
    
    e.preventDefault()
    await addDoc(formRef, formData);
    console.log('data submitted')

    setFormData({
      title: "",
      shortDesc : '',
      fullDesc : '',
      img : '',
    })

    navigate('/blogs')
  }
  return (
   <>
   <Navbar/>
   <form className='flex flex-col gap-8 w-[70%] m-4 ml-[5rem] justify-center items-center'
   onSubmit={submitHandler}
   >
      <div className='flex flex-col w-full '>
        <label htmlFor="text" className='text-[1.4rem]'>Title</label>
        <input 
        value={formData.title}
        name='title'
        onChange={handleChange}
        type="text" id='text' className='text-black' />
      </div>
      <div  className='flex flex-col w-full'>
        <label htmlFor="desc" className='text-[1.4rem]'>Short Description</label>
        <input 
        value={formData.shortDesc}
        name='shortDesc'
        onChange={handleChange}
        type="text" id='desc'
        className='text-black' />
      </div>
      <div  className='flex flex-col w-full'>
        <label htmlFor="fullDesc" className='text-[1.4rem]'>Full Description</label>
        <textarea 
        value={formData.fullDesc}
        name='fullDesc'
        onChange={handleChange}
        id="fullDesc"
        className='text-black'></textarea>
      </div>
      <div  className='flex flex-col w-full'>
        <label htmlFor="img" className='text-[1.4rem]'>Img url</label>
        <input 
        value={formData.img}
        name='img'
        onChange={handleChange}
        type="text" id='img'
        className='text-black' />
      </div>
      <button type='submit' className='w-full h-[2rem] bg-red-800 rounded rounded-lg '>Submit</button>
    
   </form>
   </>
  )
}

export default AddBlog