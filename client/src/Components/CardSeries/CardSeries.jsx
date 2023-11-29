import React, { useEffect } from 'react'
import {getSerie} from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import books from '../Filters/arrayBooks'

function CardSeries() {

    const dispatch = useDispatch()
    const serie = useSelector(state => state.serie)
    // useEffect(()=>{

    // },[])


    const handleBook =(event)=>{
        const book = event.target.value
        dispatch(getSerie(book))
    }

    const bookMap = books.map(b => b.name)

  return (
    <div>
    
    </div>
  )
}

export default CardSeries