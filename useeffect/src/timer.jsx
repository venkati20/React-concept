import React ,{useState, useEffect}from 'react'

const Timer = () => {
    const[second,setSecond]=useState(0)
  
    useEffect(()=>{
        const intervalId= setInterval(()=>{
           console.log('timmer excetuded')
            setSecond(second=>second+1)
        },1000)
        return()=>{
            console.log("time stop")
            clearInterval(intervalId)
        }
    },[])
  
    return (
    <div>
        <h1>second:{second}</h1>
    </div>
  )
}

export default Timer