// import React,{useState} from 'react'
// import ChildB from './ChildB'
// const ChildA = (props) => {
// return(
//   <>
//   {props.name}
//   <p>this is chikd</p>
//   {props.children}
//    <p>this is inside card :</p>
//   <input type='text' value={props.name} onChange={(e)=>{
//     props.set(e.target.value)
//   }}/> 
//   </>    
//   )
// }
// export default ChildA

// import React from 'react'

// const ChildA = ({product,setProduct}) => {
//   return (
//     <div>
//       <p>{product.name}</p>
//       <p>{product.city}</p>
//       <p>{product.age}</p>
//       <p>{product.work}</p>
//      < input  type='text' value={product.name} onChange={(e)=>{
//       setProduct({...product,name:e.target.value})
//      }}/>
//       < input  type='text' value={product.city} onChange={(e)=>{
//       setProduct({...product,city:e.target.value})
//      }}/>
//       < input  type='text' value={product.age} onChange={(e)=>{
//       setProduct({...product,age:e.target.value})
//      }}/>
//       < input  type='text' value={product.work} onChange={(e)=>{
//       setProduct({...product,work:e.target.value})
//      }}/>

//     </div>
//   )
// }

// export default ChildA

import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <div>
      <ChildB/></div>
  )
}

export default ChildA