'use client';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DougnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets: [{
            label: 'Banks',
            data: [10, 20, 30],
            backgroundColor: [
                '#FF6633',
                '#FFB399',
                '#FF33FF'
            ],}
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  return <Doughnut
    data={data}
    options={
        {
            cutout:'60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }        
    }
  />
}

export default DougnutChart