import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { paginado } from '../../Redux/actions'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Paginate() {
    
  const dispatch = useDispatch()
  const pages = useSelector(state => state.pages)
  const currentPage = useSelector(state => state.currentPage)

  const handleValue =(value)=>{
    dispatch(paginado(value)) 
  }

  return (
    <div>
      <div className='flex flex-row justify-center items-center my-6'>
        <button onClick={()=> handleValue("start")}><MdKeyboardDoubleArrowLeft size={30}/></button>
        <button onClick={()=> handleValue("prev")}><MdKeyboardArrowLeft size={30}/></button>

        {
          pages.map((n)=>{
            return ( 
              <button className='text-center gap-2 rounded-full bg-red-500 px-3 py-1'
                 style={{color: currentPage === n? "red": "black"}}
                 onClick={()=> handleValue(n)}>{n}
              </button> 
            )
          })
        }

        <button onClick={()=> handleValue("next")}><MdKeyboardArrowRight size={30}/></button>
        <button onClick={()=> handleValue("end")}><MdKeyboardDoubleArrowRight size={30}/></button>

      </div>
    </div>
  )
}

export default Paginate