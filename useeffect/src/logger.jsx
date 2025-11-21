import { useState,useEffect } from "react"

const Logger = () => {
    const[count,setCount]=useState(0)

    useEffect(()=>{
alert('component rendered or count',count)
    });
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>{
            setCount(count=>count+1)
        }}>click</button>
    </div>
  )
}

export default Logger