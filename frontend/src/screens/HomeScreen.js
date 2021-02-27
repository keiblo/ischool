import React from 'react'
import {Container, Button, Image, Col, Row} from 'react-bootstrap'
import jumboImg from '../assets/img/jumboImg.jpg'

const HomeScreen = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <Col style={{margin: 'auto'}}>
            <h1>Grow your </h1>
            <h1 className='text-primary'>Instagram</h1>
            <p>インスタで成功スキルを学ぶ</p>
            <p>
              <Button className='btn-rounded' variant='primary'>
                無料体験を試してみる
              </Button>
            </p>
          </Col>
          <Col>
            <Image src={jumboImg} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
