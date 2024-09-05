import React, { useEffect, useState } from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SlSizeFullscreen } from "react-icons/sl";
import profile from "../../assets/profile.png"
import { useLocation, useParams } from 'react-router-dom';


function NavBar({menuOpen,setMenuOpen}) {
  const location = useLocation();
  let [pathName,setPathName] = useState(null);
  useEffect(()=>{
    setPathName(location.pathname.includes("dashborad"));
    console.log(pathName);
  },[location])
  return (
    <div className='absolute top-0 right-0 w-full xl:w-[calc(100%-300px)] z-[60] '>
      <div className='flex justify-between px-2 items-center py-2 text-xs lg:text-sm shadow-sm'>
        <div className='flex gap-2  items-center'>
          <p className='text-xl'>
          <AiOutlineMenuUnfold onClick={()=>setMenuOpen(prev => !prev)}/>
          </p>
          <div className={`${pathName ? "sm:hidden" : "sm:flex"} hidden md:flex gap-2`}>Home <span className='text-gray-500 font-[500]'> / System Mangement / Advertising Configuration</span>
          </div>
        </div>
        <div className={`md:flex gap-5 items-center hidden ${!pathName ? "sm:hidden" : "sm:flex"} `}>
          <p>Version: 2.0.1</p>
          <p>English</p>
          <p ><SlSizeFullscreen className='font-bold text-xl'/></p>
          <p className='font-bold text-xl'>administrator</p>
          <div className='w-[50px]  px-1 hover:bg-gray-100'>
            <img className='w-full' src={profile} alt="prfile" />
          </div>
        </div>
      </div>

      <div>
        <div className='flex gap-2 px-2 shadow-sm py-1'>
          <button className='px-2 py-0 bg-green-500 text-white'>no-name</button>
          <button className='px-2 py-0 border-2 text-black'>no-name</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar