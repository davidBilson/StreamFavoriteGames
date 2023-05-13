import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    const data = {
        labels: [
            'Jan',
            'Feb',
            'March',
            'April',
            'May'
        ],
        datasets: [{
            label: 'Sales for 2023 (M)',
            data: [2,3,4,1,5]
        }]
    }
  return (
    <>
        <Line data={data} />
    </>
  )
}

export default LineChart