import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import courses from '../courses'

const CourseDetailsScreen = ({match}) => {
  const course = courses.find((c) => c.id === match.params.id)
  return (
    <Fragment>
      <Link className='btn btn-dark my-3' to='/'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={course.image} alt={course.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{course.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={course.rating}
                text={`${course.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ¥{course.price}</ListGroup.Item>
            <ListGroup.Item>Description: {course.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant='flush>'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>¥{course.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {course.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={course.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CourseDetailsScreen
