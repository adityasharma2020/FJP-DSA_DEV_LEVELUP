import React from 'react'
import Card from './Card'

const Cards = ({ courses }) => {
  const allCourses = []
  console.log(allCourses);
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course)
      })
    })

    return allCourses
  }

  return (
    <div>
      {/* Only map and render courses when the courses data is available */}
      {getCourses().map((course) => {
        return <Card course={course} key={course.id} />
      })}
    </div>
  )
}

export default Cards
