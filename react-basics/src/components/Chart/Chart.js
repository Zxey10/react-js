import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className='chart'>
        {props.dataPoints.map(data => (
            <ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label}/>
        ))}
    </div>
  )
}
