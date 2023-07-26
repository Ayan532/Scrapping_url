
import {AiOutlineSearch} from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
const Search = ({search,setSearch,handleClick}) => {
  
  return (
    <div className="w-[500px]">
  
        <div className='w-full bg-white flex justify-between items-center rounded-lg p-2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='w-full bg-white text-black' type="text" placeholder='Search It' style={{outline:"none"}} />
            <div onClick={handleClick} className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                <AiOutlineSearch className='text-black' />
            </div>
        </div>
        
    </div>
  )
}

export default Search