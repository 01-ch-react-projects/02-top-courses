import React from 'react'
import { Card } from './Card'

export const Cards = ({courses}) => {
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
    <div>
        {
          getCourses().map((course)=>{
            return <Card key={course.id} course={course}></Card>
          })
        }
    </div>
  )
}
