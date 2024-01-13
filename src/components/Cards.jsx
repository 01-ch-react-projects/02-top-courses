import React, { useState } from 'react'
import { Card } from './Card'

export const Cards = ({courses,category}) => {
  const[likedCourses,setLikedCourses]=useState([])

  const allCourses=[];
  
  let getCourses=()=>{
    
    if(category=='All'){
        Object.values(courses).forEach(arr=>{
          arr.forEach((courseData)=>{
            allCourses.push(courseData);
          })
        })
        return allCourses;
    }
    else{
      return courses[category]
    }
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
