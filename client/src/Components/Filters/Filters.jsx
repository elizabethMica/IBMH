import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { books } from './arrayBooks';
import {filterBook, getAllSermon} from '../../Redux/actions'
import { LuBookX, LuBook } from "react-icons/lu";


function Filters() {

    const dispatch = useDispatch()
    const [book, setBook] = useState([])

    const handleBook = (event)=>{
     event.preventDefault()
     setBook([event.target.value])
     dispatch(filterBook(event.target.value))
    }

    const handleDispatch =()=>{
        dispatch(getAllSermon())
        setBook("")
    }

  return (
    
    <div className='mt-24 flex justify-center items-center md:justify-start md:mx-24'>
        <label ><LuBook size={20} className='mx-2'/></label>
        <select
        className='rounded-md  border-2'
        value={book}
        onChange={(event) => handleBook(event)}
        >
        <option value="default">Libro</option>
                    {books?.map((b) => {
                        return <option value={b?.name}>{b?.name}</option>;
                    })}

        </select>
        {
            book?.length>0 ? (
                <div>
                    <button onClick={handleDispatch} className='px-2 py-1 rounded-md   mx-2'><LuBookX  size={20} className='hover:text-red-500'/></button>
                    </div>
            ) : null
            
        }
    </div>
    
    )
}

export default Filters