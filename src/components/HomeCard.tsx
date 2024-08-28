import React from 'react'
import HomeCardComponent from './HomeCardComponent'

const HomeCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
    <HomeCardComponent
      title="Total Employee"
      count={560}
      icon='Icon'
      updateDate="July 16, 2023"
      percentageChange={12}
    />
    <HomeCardComponent
      title="Total Applicant"
      count={1050}
      icon='icon'
      updateDate="July 14, 2023"
      percentageChange={5}
    />
    <HomeCardComponent
      title="Today Attendance"
      count={470}
      icon='icon' // Replace with the appropriate icon component
      updateDate="July 14, 2023"
      percentageChange={-8}
    />
    <HomeCardComponent
      title="Total Projects"
      count={250}
      icon='icon' // Replace with the appropriate icon component
      updateDate="July 10, 2023"
      percentageChange={12}
    />
  </div>
  )
}

export default HomeCard