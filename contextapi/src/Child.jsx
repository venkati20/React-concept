import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
  return (
    <>
    <h1>Child(context)</h1>
    <Grandchild/>
    </>    
  )
}

export default Child