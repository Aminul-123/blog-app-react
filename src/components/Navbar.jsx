import React from "react";
import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const auth = getAuth();
  // console.log(getAuth())

  const logOut = () => {
    auth.signOut();
    navigate(`/`);
  };
  return (
    <>
      <div className="w-full h-[3rem] bg-teal-800 flex justify-between items-center ">
        <h2 className=" text-bold text-[1.8rem] ml-8 "> Firebase Blog App </h2>
        <div className="flex gap-4 mr-8">
          {
             ( location.pathname == '/blogs') ? (
                <Link to={'/addblog'} className='mt-4'>
                <button className='h-[2rem] w-[5rem] bg-red-800'>
                  Add Blog
                </button>
              </Link>
              ) : (
                <Link to={'/blogs'} className='mt-4'>
                <button className='h-[2rem] w-[7rem] bg-red-800'>
                  Back to Blog
                </button>
              </Link>
              )
            // location.pathname == "/blogs" && (
            //   <Link to={"/addblog"} className="mt-4">
            //     <button className="h-[2rem] w-[5rem] bg-red-800">
            //       Add Blog
            //     </button>
            //   </Link>
            // )
          }

          <div>
            <h2 className="text-bold text-[1.4rem] ">
              {" "}
              {auth?.currentUser?.displayName}{" "}
            </h2>
            <p className="text-[13px] text-center pb-3">
              {" "}
              {auth?.currentUser?.email}{" "}
            </p>
          </div>
          <img
            src={auth?.currentUser?.photoURL}
            alt="img"
            className="h-[2.1rem] w-[2.1rem] bg-green-300 rounded rounded-full cursor-pointer mt-4  "
          />
          <div className="mt-4">
            <button className="h-[2rem] w-[5rem] bg-red-800" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
