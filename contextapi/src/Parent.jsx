
import Child from "./Child"
import usercontext from "./usercontext"

const Parent = () => {
    const username="venkat"
  return (
    <usercontext.Provider value={username}>
        <h1>Parent(context)</h1>
        <Child/>
        </usercontext.Provider >
  )
}

export default Parent