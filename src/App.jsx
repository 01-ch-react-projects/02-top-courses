
import './App.css'
import { Cards } from './components/Cards'
import { Filter } from './components/Filter'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        
        <Filter/>

        <Cards/>
      </div>
    </>
  )
}

export default App
