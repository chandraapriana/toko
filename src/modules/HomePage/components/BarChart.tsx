
"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    //   title: {
    //     display: true,
    //     text: 'Chart.js Bar Chart',
    //   },
    },
    maintainAspectRatio: false,
    aspectRatio: 1
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Sum by product',
        data: [1,2,3,4,5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
  
    ],
  };

export default function BarChart() {
    
    return (
        <div className='bg-white rounded-2xl shadow-xl w-[500px]' style={{ width:"500px" }}>   
       <Bar options={options} data={data} width={"100%"} height={"100%"}  />
       </div>
      
    );
  }
  