
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
      <div>
        <Navbar/>
        
        <Filter filterData={filterData}/>

        {
          loading ? (<Spinner/>):(<Cards courses={courses}/>)
        }
        
      </div>
    </>
  )
}

export default App
