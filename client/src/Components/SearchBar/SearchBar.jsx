import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../../Redux/actions'
import { IoSearch } from "react-icons/io5";

function SearchBar() {

    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const handleChange=(event)=>{
        event.preventDefault()
        setSearch(event.target.value)
    }

    const auxFunction = (event) =>{
        if(event.key==="Enter"){
          handleSubmit()
        }
    }

    const handleSubmit=()=>{
        dispatch(searchByName(search))
        setSearch("") 
    }

  return (
    <div className='w-[300px] md:mt-24'>
        <div className='justify-between items-center flex flex-row mx-8  px-2 rounded-md  border-2'>
            <input
            value={search}
                className=' w-full'
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={handleChange}
                onKeyDown={(event)=>auxFunction(event)}
            />
            <button onClick={handleSubmit} className=''><IoSearch /></button>
        </div>
  </div>
  )
}

export default SearchBar