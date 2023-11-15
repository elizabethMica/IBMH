import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { getAllSermon, getDetail } from "../../Redux/actions";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import SermonCard from "../Sermon/sermonCard";

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(id)


    const detail = useSelector(state => state.detail)
    const sermons = useSelector(state => state.sermons)

    const lastFour = sermons.slice(-4)
    const lastFirst = lastFour.toReversed()

    
    
    useEffect(()=>{
      dispatch(getDetail(id))
      dispatch(getAllSermon())
      return ()=> getDetail() 
    },[dispatch])
    
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
    const goBack = ()=>{
      navigate(-1)
    }

  return (
    <>
    <Container className="justify-content-center my-4">
          <h3>{detail?.title}</h3>
          <h5>{detail?.verse}</h5>
      <Row className="m-auto justify-content-center">
        <Col className="col-12  m-auto">
            {detail?.videoYT? (
                    <iframe
                    key={id}
                      src={embed + videoLink}
                      width={1040}
                      height={560}
                    ></iframe>
                ) : null          
            }
        </Col>
        <Col className="col-12">
        <p className="descriptionDetailTitle mt-1">Descripción</p>
        <p className="mx-4">{detail?.description}</p>
        </Col>
      </Row>
    

        <h3 className='my-4'>Ultimos sermones</h3>
        <Row className="justify-content-center m-auto">
         { lastFirst.map(s =>{
             return (
              <Col className='wrap-reverse  justify-content-center'>
                <SermonCard
                    key={s.id}
                    id={s.id}
                    title={s.title}
                    verse={s.verse}
                    description={s.description}
                    cover={s.cover}
                    videoYT={s.videoYT}
                    date={s.date} 
                />
              </Col>
            )})
          }
        </Row>
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