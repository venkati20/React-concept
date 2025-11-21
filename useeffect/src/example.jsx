import React, { useState,useEffect } from 'react'

const Example = () => {
  const[count,setCount]=useState(0)


// variation 1:runs on every render
//   useEffect(()=>{
// alert("i will render")
//   })

// variation 2:runs on first render
// useEffect(()=>{
// alert("i will run on first render")
// },[])

// // variation 3:runs on dependency array render
// useEffect(()=>{
// alert("i will run on first render")
// },[count])

// variation 4:runs onmultiple  dependency array render
// useEffect(()=>{
// alert("i will run on first render")
// },[count,total])

// // variation 5:runs add clean up
// useEffect(()=>{
// alert("i will run on first render")
// },[count,total])


useEffect (()=>{
  alert("count is updated")

return()=>{
  alert("count is unmounted")
}
},[count])

  function handleClick(){
    setCount(c=>c+1)
  }
  return (
    <div>
     <button onClick={handleClick}>click</button>
     <br/>
     <p>count:{count}</p>
    </div>
  )
}

export default Example