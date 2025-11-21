import React from 'react'
import userContext from './usercontext'
import { useContext } from 'react'


const ChildC = () => {
    const {name}=userContext(useContext)
  return (
    <div>
        {name}
    </div>
  )
}

export default ChildC