import usercontext from "./usercontext"
import { useContext } from "react"
const Grandchild = () => {
    const name=useContext(usercontext)
  return (
    <>
    <h1>Grandchild(context)</h1>
    <h1>data from parent:{name}</h1>
    </>    
  )
}

export default Grandchild