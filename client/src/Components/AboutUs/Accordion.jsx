import React, {useState} from 'react'
import { FaPlus, FaMinus} from "react-icons/fa6";

function Accordion({title, answer, answer2}) {

    const [open, setOpen] = useState(false);

  return (
    <div className='py-2'>
        <button onClick={()=>setOpen(!open)}className='flex justify-between w-full'>
            <span className='text-lg underline decoration-gray-300 font-semibold'>{title}</span>
            {
                open ? <span><FaMinus/></span> :<span><FaPlus /></span>
            }
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
            <div className='overflow-hidden px-4'>{answer}  </div>
            
        </div>
    </div>
  )
}

{/* <br/> {answer2} */}

export default Accordion