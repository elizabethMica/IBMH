import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { MdFilterAlt, MdFilterAltOff, MdPersonSearch } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { books } from './arrayBooks';
import {filterBook} from '../../Redux/actions'


function Filters() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const [book, setBook] = useState("")

    const handleBook = (event)=>{
     event.preventDefault()
     dispatch(filterBook(event.target.value))
    }


 console.log(book)
  return (
    <div className='mt-24 flex justify-center items-center md:justify-start md:mx-16'>
        <label><FaBook size={20} className='mx-2'/></label>
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
    </div>
  )
}

export default Filters