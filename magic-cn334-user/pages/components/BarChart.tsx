// pages/bar-chart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';

// Register the chart.js components we will use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

// Define the props structure for better type checking
interface BarChartProps {
  data: {
    labels: number[],
    datasets: {
      label: string,
      data: number[],
      backgroundColor: string[],
      borderColor: string[],
      borderWidth: number,
    }[]
  }
}

const BarChartPage = ({ data }: BarChartProps) => {
  // Transform the incoming data to fit the chart.js format
  console.log(data.datasets, "data")
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Hourly Data',
        data: data.datasets,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className='w-full h-full'>
      <label className="text-3xl font-bold">Today Revenue</label>
      <p className="text-2xl font-bold ml-4">$ 1000</p>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChartPage;
