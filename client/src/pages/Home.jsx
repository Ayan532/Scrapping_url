

import { useState } from "react"
import Search from "../components/Search"
import handleSearchApi from "../helpers/searchApi"

const Home = () => {
  const [search,setSearch]=useState('')
  const [loading,setLoading]=useState(false)
  const [result,setResult]=useState([])

  const handleClick=async()=>{
     if(search==='') return alert("Please type a Query")
    
     setLoading(true)
     let data=await handleSearchApi(search)
     setLoading(false)
    
     console.log(data);

     setResult(data)
    
  }
  

  return (
    <div className="w-full h-screen flex justify-center items-center gap-5 flex-col">
        <div className="w-full flex justify-center items-center sticky top-0">
            <Search  search={search} setSearch={setSearch} handleClick={handleClick}/>
        </div>
       { !loading?<div className="flex  flex-col gap-10 p-4 ">
          {result.length>0 && result.map((item,i)=>(
            <p className="border-2 border-white p-2 " key={i}>{item}</p>
          ))}
        </div>:(<div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>)}
       
    </div>
  )
}

export default Home