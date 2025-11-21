
import { useContext } from 'react'
import usercontext from './usercontext'

const Subject = () => {
    const data=useContext(usercontext)
  return (
    <div style={{backgroundColor:"pink",padding:"10px"}}>
        <h1>Subject:{data}</h1>
    </div>
  )
}

export default Subject