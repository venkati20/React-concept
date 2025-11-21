import Child from "./Child"

const Parent = () => {
    const name="venkatreddy"
  return (
    <>
    <h1>Parent</h1>
    <Child data={name}/>
    </>    
  )
}

export default Parent