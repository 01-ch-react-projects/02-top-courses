
import './App.css'
import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'
import {apiUrl,filterData} from "./data";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        
        <Filter filterData={filterData}/>

        <Cards/>
      </div>
    </>
  )
}

export default App
