import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { MdFilterAlt, MdFilterAltOff, MdPersonSearch } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { books } from './arrayBooks';
import {filterBook, getAllSermon} from '../../Redux/actions'


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
        <label ><FaBook size={20} className='mx-2'/></label>
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
                <button onClick={handleDispatch} className='hover:bg-red-500 hover:text-white px-2 py-1 rounded-md text-xs bg-gray-300 mx-2'>Borrar filtro X</button>
            ) : null
            
        }
    </div>
    
    )
}

export default Filters