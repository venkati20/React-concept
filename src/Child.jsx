import { useState } from "react"

const Child = (props) => {
    const[update,setUpdate]=useState("")
    const changeEvent=(e)=>{
        setUpdate(e.target.value)        
    }    
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.getData(update)

    }
  return (
    <>
    <div>Child</div>
    <form onSubmit={handleSubmit}>
        <input type='text' value={update} onChange={changeEvent}/>
        <button>Update text</button>
    </form>
    </>
  )
}

export default Child