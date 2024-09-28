import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deletePage } from '../../store/slices/receenPage';

function Home() {

  const [recentPage,setRecentPage] = useState([]); 
  const dispatch = useDispatch();
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('recentpage'));
    if(data){
      setRecentPage(data);
      
    }else(
      setRecentPage([])

    )
    console.log(recentPage)
  },[]);
  const delte=(e,path)=>{
    e.preventDefault();
    dispatch(deletePage(path))
  }
  return (
    <div className='grid grid-cols-3 '>
      <div className='col-start-1 col-end-3  '>
        <h1 className='text-blue-500 text-2xl mb-2'>Recently Visisted</h1>
        <div className='flex gap-2 flex-wrap'>
          {
            recentPage?.map((e,i)=>{
              return(
                <NavLink className="bg-[#e3eaf7] px-10 py-2  flex gap-2" to={e?.path} key={i}>
                {e?.link} <span onClick={(event)=>delte(event,e.path)} className='inline-block hover:bg-black hover:text-white rounded-full'>x</span>
          
              </NavLink>
              )
            })
          }
        </div>
      </div>
      <div>
        ighsj
      </div>
    </div>
  )
}

export default Home