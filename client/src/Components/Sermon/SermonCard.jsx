import { NavLink } from "react-router-dom"
import Button  from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card'
import '../../App.css'


const SermonCard = (Props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Props.cover} alt="imagen"/>
      <Card.Body>
        <Card.Title>{Props.title}</Card.Title>
        <Card.Text>
          {Props.verse}
        </Card.Text>
        <Card.Text className="descriptionCard">
          {Props.description}
        </Card.Text>
        <Button as={NavLink} to={`/sermon/${Props.id}`} variant="light" className="botonCard">Ir</Button>
      </Card.Body>
    </Card>
  )
}

export default SermonCard
