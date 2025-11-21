import React from 'react'
import Usercontext from './Usercontext'

const ContextApi = () => {


  return (
   <Usercontext.Provider value={}>
    <ChildA/>
   </Usercontext.Provider>
  )
}

export default ContextApi