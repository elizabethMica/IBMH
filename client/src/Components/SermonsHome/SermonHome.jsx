import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllSermon} from '../../Redux/actions';
import SermonCard from '../Sermon/sermonCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SermonHome = () => {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.sermons);
    const coincidence = useSelector(state => state.coincidences)


    useEffect(()=>{
        dispatch(getAllSermon())
    },[])

  return (
    <>
    <Container>
      <Row className="justify-content-md-center" xs={1} md={3}>
        {
            sermons.length ? (sermons.map(s =>{
                return(
                  <Col className="my-4">
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
                )
              })) : (coincidence===false
                ?(<p>No hay coincidencias</p>)
                :(<p>Cargando...</p>))
        }
        </Row>
    </Container>
    </>
  )
}

export default SermonHome