import React, { useState } from 'react'
import Adlogin from './components/Admin/Adlogin'
import Landing from './components/Landing'
import Adsign from './components/Admin/Adsign'
import Test from './components/Admin/Test'
function App() {
  const [data, setdata] = useState([]);
  const getData = (obj)=>{
    setdata(...data, obj);
  }
  return (
    <div>
      <Test data = {data}/>
      <Adsign getData = {getData}/>
      {/* <Adlogin /> */}
      {/* <Landing/> */}
      
    </div>
  )
}

export default App