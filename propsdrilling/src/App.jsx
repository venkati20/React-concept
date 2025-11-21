import { useState } from "react"
import Childrencomp from "./childrencomp"
import Parent from "./Parent"

const App = () => {
  const[count,setCount]=useState(0)

  const handleSubmit=()=>{
    setCount(count=>count+1)
  }
  return (
    <>
    <h1>Props drilling</h1>
    <Parent/>
    <Childrencomp touch={handleSubmit} >
      <h1>{count}</h1>
      
    </Childrencomp>
    </>
  )
}

export default App