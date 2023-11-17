import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { getAllSermon, getDetail, clearDetail } from "../../Redux/actions";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SermonCard from "../Sermon/sermonCard";
import LastFourSermonCard from "../Sermon/LastFourSermonCard";

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getDetail(id))
    },[dispatch])
    
    const detail = useSelector(state => state.detail)

    console.log(detail)
  
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
  return (
    <>

          <Container className="justify-content-center my-4">
          <h3>{detail?.title}</h3>
          <h5>{detail?.verse}</h5>
      <Row className="m-auto justify-content-center">
        <Col className="col-12  m-auto">
            {detail?.videoYT? (
                    <iframe
                      key={detail?.id}
                      src={embed + videoLink}
                      width={1040}
                      height={560}
                    ></iframe>
                ) : <p>Tu dispositivo no soporta la renderización. Por faor visita el canal de Youtube. IBM Hurlingham</p>         
            }
        </Col>
        <Col className="col-12">
        <p className="descriptionDetailTitle mt-1">Descripción</p>
        <p className="mx-4">{detail?.description}</p>
        </Col>
      </Row>

       <LastFourSermonCard />


        <Row className="justify-content-center my-4">
          <Col md="auto">
            <Button as={NavLink} to='/sermones' className='botonVerMas' variant="light">Ver más sermones...</Button>
          </Col>
        </Row>
    </Container>
      
    </>
  )
}

export default SermonDetail