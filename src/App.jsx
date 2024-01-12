
import { useEffect, useState } from 'react';
import './App.css'
import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import {apiUrl,filterData} from "./data";
import { toast } from 'react-toastify';

function App() {

  const[courses,setCourses]=useState([])

  useEffect( () => {
    const fetchData = async() => {
      try {
        const res=await fetch(apiUrl);
        const respData=await res.json();

        //save data into course variable
        setCourses(respData.data)
        // console.log(respData);
      } catch (error) {
        toast.error("Error aa gai")
      }
    }
    fetchData();
  },[])

  return (
    <>
      <div>
        <Navbar/>
        
        <Filter filterData={filterData}/>

        <Cards courses={courses}/>
      </div>
    </>
  )
}

export default App
