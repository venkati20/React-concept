import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const[name,setName]=useState("")
    const parentToChild=(data)=>{
        setName(data)

    }
  return (
    <>
    <div>Parent</div>
    <input type='text' value={name}/>
    <Child getData={parentToChild}/>
    </>
  )
}

export default Parent