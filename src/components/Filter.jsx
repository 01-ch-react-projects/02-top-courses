import React from 'react'

export const Filter = ({filterData}) => {
  return (
    <div>
        {
            filterData.map((data)=>{
                return <button>{data.title}</button>
            })
        }
    </div>
  )
}
