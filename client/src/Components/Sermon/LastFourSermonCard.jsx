import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SermonCard from './sermonCard';
import { getAllSermon, clearDetail } from '../../Redux/actions';

function LastFourSermonCard() {

    const dispatch = useDispatch();
    const sermons = useSelector(state => state.sermons)

    useEffect(()=>{
        dispatch(getAllSermon())
    },[])

    const lastFour = sermons.slice(-4)
    const lastFirst = lastFour.toReversed()

  return (
    <>
    <h3>Últimos sermones</h3>
    <Row className="justify-content-center">
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
    </>
  )
}

export default LastFourSermonCard