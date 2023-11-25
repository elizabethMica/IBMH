import React, { useState } from 'react'
import { MdFilterAlt, MdFilterAltOff, MdPersonSearch } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { books } from './arrayBooks';


function Filters() {

    const [isOpen, setIsOpen] = useState(false)
    const [book, setBook] = useState("")

    const handleBook = (event)=>{
     event.preventDefault()
     setBook(event.target.value)
    }
 console.log(book)
  return (
    <div className='mt-24 flex justify-center items-center'>
        <label><FaBook size={20} className='mx-2'/></label>
        <select
        className='bg-gray-300 rounded-lg'
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