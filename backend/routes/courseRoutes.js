import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Course from '../models/courseModel.js'

//@description Fetch all courses
//@route /api/courses
//@access Fetch all courses
app.get(
  '/',
  asyncHandler(async (req, res) => {
    const courses = await Course.find({})
  })
)

//@description Fetch single courses
//@route /api/courses/:id
//@access Fetch all courses
app.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id)

    if (course) {
      res.json(course)
    } else {
      res.status(404)
      throw new Error('Course not found')
    }

    res.json(courses)
  })
)

export default router
