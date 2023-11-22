import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../../Redux/actions'

function SearchBar() {

    const dispatch = useDispatch()

    const [search, setSearch] = useState("")

    const handleChange=(event)=>{
        setSearch(event.target.value)
    }

    const auxFunction = (event) =>{
        if(event.key==="Enter"){
          handleSubmit()
        }
    }

    const handleSubmit=()=>{
        dispatch(searchByName(value))
        setSearch("") 
    }

  return (
    <div className=''>
        <div className=''>
            <input
                className=''
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={handleChange}
                onKeyDown={(event)=>auxFunction(event)}
            />
            <button onClick={handleSubmit} className=''>buscar</button>
        </div>
  </div>
  )
}

export default SearchBar