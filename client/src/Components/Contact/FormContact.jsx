import React, {useState} from 'react'

function FormContact() {

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange =(event)=>{
  event.preventDefaul()
   setValue({
    ...value,
    [event.target.name] : event.target.value
   })
  }


  return (
    <form>
       <div className='bg-red-500'>
        <label> Nombre </label>
            <input 
            type="text" 
            placeholder="Ej: Liliana"
            name="name"
            onChange={handleChange}/>
       </div>

       <div className='bg-red-500'>
        <label> Apellido </label>
            <input 
            type="text" 
            placeholder="Ej: Ibañez"
            name="lastName"
            onChange={handleChange}/>
       </div>

       <div className='bg-red-500'>
        <label> Email </label>
            <input 
            type="email" 
            placeholder="liliana@gmail.com"
            name="email"
            onChange={handleChange}/>
       </div>

       <div className='bg-red-500'>
        <label> Telefono </label>
            <input 
            type="tel" 
            placeholder="+54 1156789209"
            name="phone"
            onChange={handleChange}/>
       </div>

       <div className='bg-red-500'>
        <label> Mensaje </label>
          <textarea
          placeholder="Mensaje..."
          name="message"
          onChange={handleChange}
          />
       </div>

    </form>
  )
}

export default FormContact