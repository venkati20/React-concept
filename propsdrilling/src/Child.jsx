import Grandchild from "./Grandchild"


const Child = (props) => {
  return (
    <>
    <h1>Child</h1>
    <Grandchild data1={props.data}/>
    </>
  )
}
export default Child