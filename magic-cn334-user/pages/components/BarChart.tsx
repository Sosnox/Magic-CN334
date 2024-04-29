// pages/bar-chart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

// Register the chart.js components we will use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [28, 48, 40, 19, 86, 27, 90],
    //   backgroundColor: 'rgba(54, 162, 235, 0.5)',
    // },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const BarChartPage = () => {
  return (
    <div className='w-full h-full'>
       <label className="text-3xl font-bold ">Today Revenue</label>
      <p className="text-2xl font-bold ml-4">$ 1000</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartPage;
