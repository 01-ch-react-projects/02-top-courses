import React, { useState } from 'react'
import { Card } from './Card'

export const Cards = ({courses}) => {
  const[likedCourses,setLikedCourses]=useState([])

  const allCourses=[];
  
  let getCourses=()=>{
    Object.values(courses).forEach(arr=>{
      arr.forEach((courseData)=>{
        allCourses.push(courseData);
      })
    })
    return allCourses;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          getCourses().map((course)=>{
            return <Card 
                      key={course.id} 
                      course={course}
                      likedCourses={likedCourses}
                      setLikedCourses={setLikedCourses}
                    />
          })
        }
    </div>
  )
}
