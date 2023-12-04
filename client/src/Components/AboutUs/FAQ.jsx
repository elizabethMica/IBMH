import React from 'react'
import Accordion from './Accordion'
import { info } from './Info'

function FAQ() {
  return (
    <div>
        {info.map(i =>{
            return <Accordion title={i.title} answer={i.answer}/>
        })}
        </div>
  )
}

export default FAQ