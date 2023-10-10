import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import './Character.scss'
import characterData from '../../data/characterData'
import pointIcon from '../../data/pointIcon'
import Tilt from 'react-parallax-tilt'
import { AiOutlineInbox } from 'react-icons/ai'

const Character = () => {
  const [circleData, setCircleData] = useState(characterData[0])

  return (
    <Container fluid className="character">
      <Container className="inner">
        <Row className="content">
          <Col md={6} className="col">
            <h1>
              요즘 대세
              <br /> 캐릭터 체크카드
            </h1>
            <p>보면 볼수록 귀여운 캐릭터 체크카드를 살펴보세요!</p>
            <div className="selectCircleBox">
              {characterData.map((character) => (
                <div
                  className="selectCircle"
                  style={{ backgroundImage: `url(${character.image})` }}
                  key={character.id}
                  onClick={() => {
                    setCircleData(character)
                  }}></div>
              ))}
            </div>
            <div className="pointBox">
              <div className="cardInfo">
                <Badge>{circleData.bank}</Badge>
                <h3>{circleData.name}</h3>
              </div>
              {circleData.point.map((point, index) => (
                <div key={'point' + index} className="point">
                  {pointIcon(`${Object.keys(point)}`)}
                  <h5>{Object.values(point)}</h5>
                </div>
              ))}
            </div>
          </Col>
          <Col className="card" id="card">
            <Tilt className="cardImg" style={{ backgroundImage: `url(${circleData.image})` }}></Tilt>
            <div className="moreButton">
              <Button>+ 자세한 혜택</Button>
              <Button>
                <AiOutlineInbox strokeWidth="20" />
                &nbsp;카드 비교
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Character