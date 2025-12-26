

const PostDisplay = () => {
    const[showUser,setShowUser]=useState(false);
    const[showComments,setShowComments]=useState(false);


    const userHandler=()=>{
        setShowUser((prevState)=>!prevState);
    }
    const commentHandler=()=>{
        setShowComments((prevState)=>!prevState);
    }


  return(
    <>
    <div>
        <button onClick={userHandler}>subscribe</button>
        {showUser && <UserForm/>}
        <button onClick={commentHandler}>Comments</button>
        {showComments && <CommentForm/>}
        <button>like</button>
    </div>
    <div>
        <NewUser/>
        <NewComments/>
    </div>
    </>
  ) 
}       
export default PostDisplay;