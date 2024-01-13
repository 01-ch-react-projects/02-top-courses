
import { useEffect, useState } from 'react';
import './App.css'
import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import {apiUrl,filterData} from "./data";
import { toast } from 'react-toastify';
import { Spinner } from './components/Spinner';

function App() {

  const[courses,setCourses]=useState([])
  const[loading,setLoading]=useState(true)

  const fetchData = async() => {
    setLoading(true)
    try {
      const res=await fetch(apiUrl);
      const respData=await res.json();

      //save data into course variable
      setCourses(respData.data)
    } catch (error) {
      toast.error("Error aa gai")
    }
    setLoading(false)
  }

  useEffect( () => {
    fetchData();
  },[])

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Navbar/>
        
        <Filter filterData={filterData}/>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner/>):(<Cards courses={courses}/>)
          }
        </div>
      </div>
    </>
  )
}

export default App
