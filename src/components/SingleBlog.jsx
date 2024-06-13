import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../Firebase';
import { getDoc, doc, collection } from 'firebase/firestore';
import Navbar from './Navbar';

function SingleBlog() {
  const {id} = useParams();
  const [data, setData] = useState({});
  //console.log(id)
  //const colRef = collection(db, 'blog');

  useEffect(() => {
    const singleData = doc(db, 'blog', id);
    const singleFetch = () => {
      getDoc(singleData).then((d) => {
        setData(d.data())
      })
    }
    singleFetch();
  }, [id]);

  return (
    <>
   <Navbar/>
    <div className='flex justify-center items-center mt-8 gap-8'> 
    

  
      <div>
        
           <div className="flex items-center gap-4 mb-4 ">
          <img
            src={data.authorImg}
            alt="img"
            className="h-[2.1rem] w-[2.1rem] bg-green-300 rounded rounded-full cursor-pointer mt-4 "
          />
          <h2 className="text-bold text-[1.2rem] ">
            {" "} 
            {data.authorName}{" "}
          </h2>
          </div>


        <img src={data.img} alt="img" className='h-[19rem] w-[17rem] rounded rounded-lg' />
      </div>
      <div className='w-[50%]  text-center'>
        <h2 className='text-[1.8rem] text-center'> {data.title} </h2>
        <p className='my-4 text-[1.4rem] '> { data.shortDesc } </p>
        <p className='text-[1.2rem]' >
          {data.fullDesc}
        </p>
      </div>
      
      
      
       </div>
       </>
  )
}

export default SingleBlog