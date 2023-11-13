import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { getDetail } from "../../Redux/actions";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const SermonDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const detail = useSelector(state => state.detail)

    
    useEffect(()=>{
      dispatch(getDetail(id))
    },[])
    
    const embed = "https://www.youtube.com/embed/"
    const videoLink = detail?.videoYT?.split("/")[3]
    
    const goBack = ()=>{
      navigate(-1)
    }

  return (
    <>
    <Container className="justify-content-center my-4">
      <Row className="my-4">
        <Col className="col-12">
          <h3>{detail?.title}</h3>
        <h5>{detail?.verse}</h5>
        </Col>
     
      </Row>
      <Row>
            {detail?.videoYT? (
                    <iframe
                      src={embed + videoLink}
                      width={840}
                      height={560}
                    ></iframe>
                ) : null          
            }
        <p>{detail?.description}</p>

      </Row>
        <Button onClick={goBack}  className="btnDetail" variant="light">Volver</Button>
    </Container>
    </>
  )
}

export default SermonDetail