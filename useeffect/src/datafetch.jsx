import React,{useState,useEffect} from 'react'

const DataFetch = () => {
    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const interval=async()=>{
        try{        
          let response=  await fetch('https://jsonplaceholder.typicode.com/users')
           let data= await response.json()
           setData(data)
        }
        catch(error){
            console.log("error fetching data",error)
        }
        finally{        
            setLoading(false)
        }
    }
       interval()
    },[]);
  return (
    <div>
        {loading?(
            <div>
                <p>loading...</p>
                </div>
        ):(
            <ul>
                {
                    data.map((item)=>(
 <li key={item.id}>{item.name}</li>
                    ))
                   
                }
            </ul>
        )}
    </div>
  )
}

export default DataFetch