import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'
import {listCourseDetails} from '../actions/courseActions'

const CourseDetailsScreen = ({history, match}) => {
  const [questionsQty, setQestionsQty] = useState(1)
  const dispatch = useDispatch()

  const courseDetails = useSelector((state) => state.courseDetails)
  const {loading, error, course} = courseDetails
  useEffect(() => {
    dispatch(listCourseDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?questionsQty=${questionsQty}`)
  }

  return (
    <Fragment>
      <Link className='btn btn-dark my-3' to='/'>
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'> {error}</Message>
      ) : (
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
                {course.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={questionsQty}
                          onChange={(e) => setQestionsQty(e.target.value)}
                        >
                          {[...Array(course.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
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
      )}
    </Fragment>
  )
}

export default CourseDetailsScreen
