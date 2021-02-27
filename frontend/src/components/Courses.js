import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Course from '../components/Course'
import courses from '../courses'

const Courses = () => {
  return (
    <Container className='my-5'>
      <h1 className='text-center'>コース紹介</h1>

      <Row>
        {courses.map((course) => (
          <Col key={course._id} sm={12} md={6} lg={4} xl={3}>
            <Course course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Courses
