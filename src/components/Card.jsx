import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
export const Card = ({course,likedCourses,setLikedCourses}) => {
  
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prevState)=>prevState.filter(cid => cid!==course.id))
      toast.warning("Removed liked")
    }
    else{
      if(likedCourses.length===0){
        setLikedCourses([course.id])
      }
      else{
        setLikedCourses(prev=>[...prev,course.id])
      }
      toast.success("Liked Successfully")
    }
  }

  return (
    <div className='w-[300px] bg-slate-700 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 top-36
            grid place-items-center'> 
            <button onClick={clickHandler}>
             {
                likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
             }
            </button>
        </div>
        <div className='p-4 bg-slate-700'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
              {
                course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
              }
            </p>
        </div>
      </div>
    </div>
  )
}
