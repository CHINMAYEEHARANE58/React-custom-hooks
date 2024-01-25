import React from 'react'
import useStorage from './Custom-hooks/useStorage'

const App = () => {

  const {setStorage} = useStorage()
  return (
    <div>
      <input type="text" placeholder='Enter Some Text' onChange={(e)=>setStorage(e.target.value)} style={{width:"30vh", height:"5vh", border:"2px solid blue", color:"black", fontSize:"20px"}} />
    </div>
  )
}

export default App
