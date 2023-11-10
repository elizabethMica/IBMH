import { NavLink, Link } from "react-router-dom"
import Button  from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import '../../App.css'


const SermonCard = (Props) => {
  return (
    <Card style={{ width: '18rem' }} className="cardBody">
      <NavLink to={`/sermon/${Props.id}`}>
        <Card.Img variant="top" src={Props.cover} alt="imagen" className="imgCard" />
      </NavLink>
      <Card.Body  >
        <Card.Title style={{ textDecoration: "none", fontWeight: "bold"}} as={NavLink} to={`/sermon/${Props.id}`}>{Props.title}</Card.Title>
        <Card.Text className="verseCard">
          {Props.verse}
        </Card.Text>
        <Card.Text className="descriptionCard">
          {Props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SermonCard
