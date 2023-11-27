import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {postContact} from '../../Redux/actions'

function FormContact() {

  const dispatch = useDispatch()

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })
  
  const handleChange =(event)=>{
  event.preventDefault();
   setValue({
    ...value,
    [event.target.name] : event.target.value
   })
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(postContact(value))
    alert("Mensaje enviado con exito. En breve nos contactaremos con usted!")
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event)} className='bg-[#443426] md:rounded-lg my-8 py-4 md:py-6 justify-center items-center flex  flex-col gap-2 md:gap-4 md:w-3/6 w-full'>
       <div className=' w-[300px] md:w-full md:px-6 flex flex-col mx-8'>
        <label className='text-sm text-white md:text-lg'> Nombre </label>
            <input 
            className='w-full h-[45px] border-2  rounded-md text-start'
            type="text" 
            placeholder="ej: Liliana"
            name="name"
            onChange={handleChange}/>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white md:text-lg'> Apellido </label>
            <input 
            className='w-full border-2 h-[45px] rounded-md text-start'
            type="text" 
            placeholder="ej: Ibañez"
            name="lastName"
            onChange={handleChange}/>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white md:text-lg'> Email </label>
            <input 
            className='w-full  border-2 h-[45px] rounded-md text-start'
            type="email" 
            placeholder="ej: liliana@gmail.com"
            name="email"
            onChange={handleChange}/>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white md:text-lg'> Telefono </label>
            <input 
            className='w-full  border-2 h-[45px] rounded-md text-start'
            type="tel" 
            placeholder="+54 1156789209"
            name="phone"
            onChange={handleChange}/>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white md:text-lg'> Mensaje </label>
          <textarea
          className='w-full min-h-[150px] border-2  rounded-md text-start '
          placeholder="Mensaje..."
          name="message"
          onChange={handleChange}
          />
       </div>

       <div className='flex justify-center items-center'><button type="submit" className='bg-[#bdbdbd] px-4 py-1 my-2 md:px-6 rounded-lg'>Enviar</button></div>

    </form>
  )
}

export default FormContact