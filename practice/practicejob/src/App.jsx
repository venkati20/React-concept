// import React,{useState,useEffect} from "react"
// const App=()=>{
//   const[data,setData]=useState([])
//   const[loading,setLoading]=useState(true)

//   useEffect(()=>{

//     const interval=async()=>{
//       try{
//         let response=await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data= await response.json()
//         setData(data)
//       }
//       catch(error){
//         console.log("error fetching data",error)
//       }
//       finally{
//         setLoading(false)
//       }
//     }
// interval()
//   },[])
//   return(
//     <>
//     {loading?(
//       <div>
//         <h1>loading....</h1>
//       </div>
//     ):(
//       <ul>
//         {data.map((item)=>(
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     )}
//     </>

//   )
// }
// export default App

// import React from 'react'
// import ChildA from './ChildA'
// var name = "venkat"
// const App = () => {
//   return (
//     <div>
//       <p>parent</p>
//       <ChildA name={name}>
//         <p>thisis venkat</p>
//         <p>this is reddy</p>
//       </ChildA>
//     </div>
//   )
// }
// export default App


// import React,{useState} from 'react'

// const App = () => {
//   const[count,setCount]=useState(0)

//   const increment=()=>{
//     setCount(count=>count+1)
//   }
//     const decrement=()=>{
//     setCount(count=>count-1)
//   }
//   return (
//     <>
//     <p>count:{count}</p>
//     <button onClick={increment}>+</button>
//      <button onClick={decrement}>-</button>
//     </>
//   )
// }

// export default App

// import React,{useState} from 'react'

// const App = () => {
// const[product,setProduct]=useState({
//   name:'wohon',
//   city:'hyd',
//   age:27

// })

//   return (
//     <div className='wrapper'>
//       <p>{product.name}</p>
//       <p>{product.city}</p>
//       <p>{product.age}</p>
//       <input  type='text' value={product.name} onChange={(e)=>
//         setProduct({...product,name:(e.target.value)})}
//       />
//       <br/>
//       <input  type='text' value={product.city} onChange={(e)=>
//         setProduct({...product,city:(e.target.value)})}
//       />
//       <br/>
//       <input  type='number' value={product.age} onChange={(e)=>
//         setProduct({...product,age:(e.target.value)})}
//       />
//       <button onClick={()=>{   
       
//       }} >click</button>


//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react';

// const App = () => {
//   const [product, setProduct] = useState({
//     name: 'wohon',
//     city: 'hyd',
//     age: 27
//   });

//   // Reusable function to update any field
//   const updateField = (field, value) => {
//     setProduct({ ...product, [field]: value });
//   };

//   return (
//     <div className="wrapper">
//       <h3>Current Product Details:</h3>
//       <p>Name: {product.name}</p>
//       <p>City: {product.city}</p>
//       <p>Age: {product.age}</p>

//       <h3>Edit Fields:</h3>
//       <input
//         type="text"
//         value={product.name}
//         onChange={(e) => updateField('name', e.target.value)}
//         placeholder="Enter name"
//       />
//       <br />
//       <input
//         type="text"
//         value={product.city}
//         onChange={(e) => updateField('city', e.target.value)}
//         placeholder="Enter city"
//       />
//       <br />
//       <input
//         type="number"
//         value={product.age}
//         onChange={(e) => updateField('age', Number(e.target.value))}
//         placeholder="Enter age"
//       />
//       <br /><br />

//       <h3>Update Using Buttons:</h3>
//       <button onClick={() => updateField('name', 'Updated Name')}>
//         Update Name
//       </button>
//       <button onClick={() => updateField('city', 'Updated City')}>
//         Update City
//       </button>
//       <button onClick={() => updateField('age', 35)}>
//         Update Age
//       </button>
//     </div>
//   );
// };

// export default App;


// import React ,{useState} from 'react'

// const App=()=>{
// const[name ,setName]=useState("venkat")
// const[city,setCity]=useState("hyderabad")
// const[age,setAge]=useState("34")
  
// return(
//   <>
//   <p>this is update data</p>
//   <p>{name}</p>
//   <p>{city}</p>
//   <p>{age}</p>
//   <label>Name:</label>
//   <input type='text' value={name} onChange={(e)=>{
//     setName(e.target.value)
//   }}/>
//   <br/>
//   <label>city:</label>
//   <input type='text' value={city} onChange={(e)=>{
//     setCity(e.target.value)}}/>
//       <br/>
//       <label>age:</label>
//   <input type='number' value={age} onChange={(e)=>{
//     setAge(e.target.value)}}/>
//     <button onClick={()=>{
//       setName()
//     }}>update name</button>

//   </>

// )
// }
// export default App


// import React ,{useState} from 'react'

// const App = () => {
//   const[update,SetUpdate]=useState("")
//   const[display,setDisplay]=useState("")
//   return (
//    <>
//    <p>display data:{display}</p>
//    <input type='text' value={update} onChange={(e)=>
// SetUpdate(e.target.value)
//    }/>
//    <button onClick={()=>{
//     setDisplay(update)   
//    }}>click</button>
//    </>
//   )
// }

// export default App

// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [labelValue, setLabelValue] = useState('');

//   return (
//     <div>
//       <h3>Update Label on Button Click</h3>

//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Type something"
//       />

//       <button onClick={() => setLabelValue(inputValue)}>
//         Update Label
//       </button>

//       <br /><br />
//       <label>{labelValue}</label>
//     </div>
//   );
// };

// export default App;




// import React,{useState} from 'react'

// const App = () => {
//   const[name,setName]=useState("")
//   const[city,setCity]=useState("")
//   const[age,setAge]=useState("")
//   const[display,setDisplay]=useState({
//     name:"",
//     city:"",
//     age:""
//   })
//     return (
//    <>
//    <p>name:{display.name}</p>
//    <p>name:{display.city}</p>
//    <p>name:{display.age}</p>
//    <input type='text' value={name} onChange={(e)=>{
//     setName(e.target.value)
//    }}/>
//    <input type='text' value={city} onChange={(e)=>{
//     setCity(e.target.value)
//    }}/>
//    <input type='text' value={age} onChange={(e)=>{
//     setAge(e.target.value)
//    }}/>
//    <button onClick={()=>{
//     setDisplay({...display,name})
//    }}>update name</button>

//    <button onClick={()=>{
//     setDisplay({...display,city})
//    }}>update city</button>
//    <button onClick={()=>{
//     setDisplay({...display,age})
//    }}>update age</button>
//    <button onClick={() => {
//           setName('');
//           setCity('');
//           setAge('');
//           setDisplay({ name: '', city: '', age: '' });
//         }}
// >reset</button>
   
//    </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import ChildA from './ChildA'
// const App = () => {
//   const[name,setName]=useState("")
//   return (
//     <>
//     <p>this is Parent</p>
//     <input type='text' value={name} onChange={(e)=>{
// setName(e.target.value)
//     }}/>
//       <ChildA  name={name} setName={setName}/>
//     </>
//   )
// }
// export default App

// import React,{useState} from 'react'
// import ChildA from './ChildA'

// const App = () => {
//   const[product,setProduct]=useState({
//     name:'venkat',
//     city:'bangalore',
//     age:35,
//     work:'private'
//   })
//   return (
//     <div>
//       <p>this is parent</p>
//       <ChildA product={product} setProduct={setProduct}/>
//     </div>
//   )
// }

// export default App

// import React from 'react';
// import UserContext from './UserContext';
// import ChildA from './ChildA';

// const App = () => {
//   const p = {
//     name: 'venkat',
//     age: 34
//   };

//   return (
//     <UserContext.Provider value={p}>
//       <ChildA />
//     </UserContext.Provider>
//   );
// };

// export default App;


// import React from 'react'
// import UserContext from './UserContext';

// const App = () => {

  
//   return (
//    <>
//    <themeContext.Provider value={}></themeContext.Provider>
//    </>
//   )
// }

// export default App

// import React from 'react'


// const App = () => {
//     const router=browswer
//   return (
//     <div>App</div>
//   )
// }

// export default App

// import React, {useState, useRef } from 'react'

// const App = () => {
//   const[count,setCount]=useState(0)

//  let refElement=useRef(null)

// //  function handleClick(){
// //   refElement.current.style.backgroundColor="green"
// //  }

// function handleStart(){
//  refElement.current= setInterval(()=>{
//     setCount(count=>count+1)
//   },1000)
// }

// function handleStop(){
//   clearInterval(refElement.current);
//  refElement.current=null
// }

// function handleReset(){
//   handleStop()
//   setCount(0)
// }


//   return (
//     <div>
//       {/* <input type='text'ref={refElement} />
//       <button onClick={handleClick}>click</button> */}

//       <p>count:{count}</p>
//       <button onClick={handleStart}>start</button>
//         <button onClick={handleStop}>stop</button>
//           <button onClick={handleReset}>reset</button>
//     </div>
//   )
// }

// export default App


// import React,{useState,useMemo} from 'react'

// const App = () => {
//   const[count,setCount]=useState(0)
//   const[input,setInput]=useState(0)

//   function expensiveCount(num){
//     console.log("exoensive count")
//     for(let i=0;i<=10000000;i++)
//       return num*2
    
//   }
//   let doubleValue= useMemo(()=>expensiveCount(input),[input])
//   return (
//     <div>
//       <p>count:{count}</p>
//       <button onClick={()=>{
//         setCount(count=>count+1)
//       }}>couunt add</button>
//       <input type='number' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
//       <p> doublecount:{doubleValue}</p>
//     </div>
//   )
// }

// export default App

