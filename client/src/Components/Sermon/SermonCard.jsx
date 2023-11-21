import { NavLink, Link } from "react-router-dom"



const SermonCard = (Props) => {

  return (
    <div style={{ width: '18rem' }} className=" my-6 md:my-0" >
      <NavLink to={`/sermon/${Props.id}`}>
        <img  src={Props.cover} alt={`Imagen del sermon ${Props.title}`} className="rounded-lg w-[300px] h-[200px]" />
      </NavLink>
      <div className=""  >
        <p className="text-sm" >{Props.date}</p>
        <NavLink to={`/sermon/${Props.id}`}><h3 className="text-lg font-semibold">{Props.title}</h3></NavLink>
        <h4 className="text-sm">{Props.verse}</h4>
        <p className="truncate">{Props.description}</p>
      </div>
    </div>
  )
}

export default SermonCard
