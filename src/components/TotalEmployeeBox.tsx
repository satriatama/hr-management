import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DougnutChart from './DougnutChart'

const TotalEmployeeBox = ({
    icon,
    title,
    totalEmployee,
    employeedifference,
    lastUpdated
}:TotalEmployeeBoxProbs) => {
  return (
    <section className='dashboard-card'>
    <div className='dashboard-card_icon'>
            <i className={`fas fa-${icon}`}>Icon</i>
    </div>
    <div className='dashboard-card_title'>
        <p>{title}  </p>
    </div>
    </section>

  )
}

export default TotalEmployeeBox