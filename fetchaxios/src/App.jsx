// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App=()=>{
//   const[data,setData]=useState([])
//   const[loading,setLoading]=useState(true)

//   useEffect(()=>
//   {
//     const dataFetch=async()=>{
// try{
//   let res=await fetch ("https://jsonplaceholder.typicode.com/users")
//   .then((response)=>response.json())
//   .then(data=>{
//     setData(data)})
//   }catch(err){
//   console.log("error fetching data",err)
// }finally{
//   setLoading(false)
// }
// }    
//     dataFetch()
//   },[])
//   return(
// loading?(
//   <p>Loading...</p>
// ):(
//   <ul>
//   {data.map((item)=>(
//     <li key={item.id}>{item.name}</li>
//   ))}
//   </ul>
// ))}

// export default App


// Axios

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// const App=()=>{

//   const[data,setData]=useState([])
//   const[loading,setLoading]=useState(true)
//    let api=axios.create({
//     baseURL:"https://jsonplaceholder.typicode.com"
//    })

//   useEffect(()=>{
//     const dataFetch=async()=>{
//       try{
// let res=await api.get("/users1")
// console.log(res)
// setData(res.data)
//       }catch(err){
//         console.log("error fetching data",err)
//       }
//       finally{
//         setLoading(false)
//       }
//     }
//     dataFetch()
//   },[])
//   return(
//     loading?(
//       <p>Loading.....</p>
//     ):(
//       <ul>
//         {data.map((item)=>(
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     )

//   )

// }
// export default App

 import React,{useState,useEffect} from 'react'
import axios from 'axios'
 const App=()=>{
  const[data,setData]=useState([])
  const[loading,setLoading]=useState(true)

  let api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
  })
  useEffect(()=>{
    const dataFetch=async()=>{
try{
  let res=await api.put("/posts/1",{
    id:201,
    userId:201,
title:"venkat"
  })
  console.log(res)
  setData(res.data)
}catch(err){
  console.log("error fetching data",err)
}finally{
  setLoading(false)
}} 
dataFetch()
  },[])

  return(
    loading?(
      <p>loading....</p>
    ):(
     <>
      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.userId}</p>
     </>
    )

  )
 }
 export default App
