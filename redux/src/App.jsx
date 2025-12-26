import React ,{useReducer}from 'react'
provider
const App = () => {
  const reducerFunction=(state,action)=>{
    if(action.type=='inc')
      return state+1
    else if (action.type=='dec')
      return state-1
    else if(action.type=='reset')
      return 0
    else return state
  }
  const[counter,dispatch]=useReducer(reducerFunction,0)
  return (
    < div className='mt-4'>
    <p>counter:{counter}</p>
    <button onClick={()=>{
      dispatch({type:'inc'})
    }} className='btn btn-primary m-2'>Inc</button>
    <button onClick={()=>{
      dispatch({type:'dec'})
    }} className='btn btn-primary m-2'>Dec</button>
    <button onClick={()=>{
      dispatch({type:'reset'})
    }} className='btn btn-danger m-2'>Reset</button>
    </div>
  )
}
export default App