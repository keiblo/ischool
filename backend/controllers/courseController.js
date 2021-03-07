import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

//@description Fetch all courses
//@route /api/courses
//@access Fetch all courses
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({})
  res.json(courses)
})

//@description Fetch single courses
//@route /api/courses/:id
//@access Fetch all courses
const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (course) {
    res.json(course)
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})

export {getCourses, getCourseById}
