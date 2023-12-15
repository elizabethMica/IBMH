import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {postContact, clearErrors, setNewErrors} from '../../Redux/actions'
import validation from './validation'

function FormContact() {

  const globalErrors = useSelector(state=> state.errors)
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
   setErrors(validation({
    ...value,
    [event.target.name]: event.target.value
   }));
  }

  const isSubmitDisabled = Object.keys(errors).length > 0;

  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(postContact(value)).then((postError)=>{
            
            if(!postError){
                setValue({
                  name: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  message: ""  
                })
                alert("Gracias por contactarte con nosotros. Te responderemos a la brevedad!")
                navigate("/")
                dispatch(clearErrors())
            }else{
                dispatch(setNewErrors({type:"postContact", error: postError?.response?.data}))
            }
        })
    
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event)} className='bg-[#443426] md:rounded-lg  md:my-8 py-4 md:py-6 justify-center items-center flex  flex-col gap-2 md:gap-4 md:w-3/6 w-full '>
       <div className=' w-[300px] md:w-full md:px-6 flex flex-col mx-8'>
        <label className='text-sm text-white '> Nombre </label>
            <input 
            className='w-full h-[45px] border-2  rounded-md text-start'
            type="text" 
            placeholder="ej: Guillermo"
            name="name"
            onChange={handleChange}/>
            <p className="text-red-400" style={{ visibility: errors?.name ? 'visible' : 'hidden' }}>{errors?.name}</p>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white'> Apellido </label>
            <input 
            className='w-full border-2 h-[45px] rounded-md text-start'
            type="text" 
            placeholder="ej: Gurdzel"
            name="lastName"
            onChange={handleChange}/>
            <p className="text-red-400" style={{ visibility: errors?.lastName ? 'visible' : 'hidden' }}>{errors?.lastName}</p>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white '> Email </label>
            <input 
            className='w-full  border-2 h-[45px] rounded-md text-start'
            type="email" 
            placeholder="ej: gurdzel@gmail.com"
            name="email"
            onChange={handleChange}/>
            <p className="text-red-400" style={{ visibility: errors?.email ? 'visible' : 'hidden' }}>{errors?.email}</p>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white '> Teléfono </label>
            <input 
            className='w-full  border-2 h-[45px] rounded-md text-start'
            type="tel" 
            placeholder="ej: +54 1122334455"
            name="phone"
            onChange={handleChange}/>
            <p className="text-red-400" style={{ visibility: errors?.phone ? 'visible' : 'hidden' }}>{errors?.phone}</p>
       </div>

       <div className=' w-[300px] md:w-full md:px-6 flex flex-col'>
        <label className='text-sm text-white '> Mensaje </label>
          <textarea
          className='w-full min-h-[150px] border-2  rounded-md text-start '
          placeholder="Mensaje..."
          name="message"
          onChange={handleChange}
          />
          <p className="text-red-400" style={{ visibility: errors?.message ? 'visible' : 'hidden' }}>{errors?.message}</p>
       </div>

       <div className='flex justify-center items-center'><button type="submit" className='bg-[#be8552] text-white hover:bg-[#9c6d44]  px-4 py-1 my-2 rounded-lg' disabled={isSubmitDisabled} style={isSubmitDisabled ? {opacity: "0.6", cursor: "not-allowed"}:null}>Enviar</button></div>
       <p className="text-red-400" style={{ visibility: globalErrors?.postContact?.error ? 'visible' : 'hidden' }}>{globalErrors?.postContact?.error}</p>

    </form>
  )
}

export default FormContact