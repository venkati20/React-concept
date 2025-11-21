import usercontext from './usercontext'
import College from './College'
import { useState } from 'react'

const Storage = () => {
    const[change,setChange]=useState("")
  return (
  < div style={{backgroundColor:"green",padding:"20px"}}>
    <h1>Storage</h1>
  <usercontext.Provider value={change}>
    <select value={change} onChange={(e)=>setChange(e.target.value)}>
        <option value="">Select</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
        <option value="Social">Social</option>

    </select>
    <button onClick={()=>setChange("")}>Delete subject</button>
    <College/>
  </usercontext.Provider>
  </div>
  )
}

export default Storage
