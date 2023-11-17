import { NavLink, Link } from "react-router-dom"



const SermonCard = (Props) => {

  return (
    <div style={{ width: '18rem' }} className="cardBody" >
      <NavLink to={`/sermon/${Props.id}`}>
        <img  src={Props.cover} alt={`Imagen del sermon ${Props.title}`}  />
      </NavLink>
      <div  >
        <p >
          {Props.date}
        </p>
        <h3 style={{ textDecoration: "none", fontWeight: "bold"}} as={NavLink} to={`/sermon/${Props.id}`}>{Props.title}</h3>
        <h4 className="verseCard m-auto">
          {Props.verse}
        </h4>
        
        <p className="descriptionCard">
          {Props.description}
        </p>
      </div>
    </div>
  )
}

export default SermonCard
