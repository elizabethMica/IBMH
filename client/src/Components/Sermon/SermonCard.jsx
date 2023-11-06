import { NavLink } from "react-router-dom"
const SermonCard = (Props) => {

  return (
    <div>
      <img src={Props.cover} alt="imagen"/>
      <h3>{Props.title}</h3>
      <h4>{Props.verse}</h4>
      <p>{Props.description}</p>
      <NavLink to={`/sermon/${Props.id}`}><button>Ir</button></NavLink>
    </div>
  )
}

export default SermonCard