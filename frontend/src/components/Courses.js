import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Container} from 'react-bootstrap'
import {listCourses} from '../actions/courseActions'
import Course from '../components/Course'
import Message from '../components/Message'
import Loader from '../components/Loader'

const Courses = () => {
  const dispatch = useDispatch()

  const courseList = useSelector((state) => state.courseList)
  const {loading, error, courses} = courseList

  useEffect(() => {
    dispatch(listCourses())
  }, [dispatch])

  return (
    <Container className='my-5'>
      <h1 className='text-center'>コース紹介</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {courses.map((course) => (
            <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
              <Course course={course} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default Courses
