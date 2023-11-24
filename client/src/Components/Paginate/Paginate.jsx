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
      <div>
        <button onClick={()=> handleValue("start")}><MdKeyboardDoubleArrowLeft size={20}/></button>
        <button onClick={()=> handleValue("prev")}><MdKeyboardArrowLeft size={20}/></button>

        {
          pages.map((n)=>{
            return ( 
              <button 
                 style={{color: currentPage === n? "red": "black"}}
                 onClick={()=> handleValue(n)}>{n}
              </button> 
            )
          })
        }

        <button onClick={()=> handleValue("next")}><MdKeyboardArrowRight size={20}/></button>
        <button onClick={()=> handleValue("end")}><MdKeyboardDoubleArrowRight size={20}/></button>

      </div>
    </div>
  )
}

export default Paginate