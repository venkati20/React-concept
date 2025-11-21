import React from 'react'

const Childrencomp = (props) => {
  return (
    <>
    <h1>childrencomp</h1>
    <h1>{props.children}</h1>
    <button onClick={props.touch}>INCREMENT</button>
    </>
    
  )
}

export default Childrencomp