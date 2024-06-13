import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";
import {db} from '../Firebase';
import {onSnapshot , collection, doc, deleteDoc} from 'firebase/firestore'
import { Link } from "react-router-dom";

function Blogs() {
  const [data, setData ] = useState([])
  const collref = collection(db, "blog");

  const auth = getAuth();

  const deleteData = async (id) => {
    const data =   doc(db, 'blog', id)
    alert('Your document will be deleted forever')
    await  deleteDoc(data)
  }

  useEffect(() => {
      const getData = () => {
        onSnapshot(collref, (snapshot) => {
          setData(snapshot.docs.map((doc) => ({
            ...doc.data(), id:doc.id
          })
          ))
        })
      }
      getData()
      console.log(data)
  }, [])

  return (
    <>
      <Navbar />
{
  data.map((d) => {
    return (
      <div key={d.id}>
         <div className="h-[17rem] w-[70%] ml-[12rem] bg-gray-600 text-white m-4 p-4">
        <div className="flex items-center gap-4 mb-4 ">
          <img
            src={d.authorImg}
            alt="img"
            className="h-[2.1rem] w-[2.1rem] bg-green-300 rounded rounded-full cursor-pointer mt-4 "
          />
          <h2 className="text-bold text-[1.2rem] ">
            {" "}
            {d.authorName}{" "}
          </h2>
        </div>

        <div className="flex gap-12 ">
          <div>
            <img
              src={d.img}
              alt="img"
              className="rounded rounded-lg w-[9rem] h-[11rem] "
            />
          </div>

          <div className="w-[60%] text-center ml-8">
            <h2 className="text-[1.4rem]"> {d.title} </h2>
            <p>
             {
              d.shortDesc
             }
            </p>
            <p className="mt-2">Last updated 3 mins ago</p>

            <div className="flex gap-8 ml-[9rem] mt-2  text-center">
              <Link to={`/singleblog/${d.id}`} className="h-[2rem] w-[5rem] border bg-red-800">
                View More
              </Link>
              <button className="h-[2rem] w-[5rem] border bg-teal-800"
              onClick={() => deleteData(d.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    )
  })
}


   
    </>
  );
}

export default Blogs;
