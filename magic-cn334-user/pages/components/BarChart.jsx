import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

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
      position: 'top',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Hour',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Revenue',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    }
  },
};

const BarChartPage = ({ data }) => {
  const chartData = {
    labels: data?.label,
    datasets: [
      {
        label: `Date ${data?.today}`,
        data: data.data,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  console.log(data)

  return (
    <div className='w-full h-full'>
      <label className="text-3xl font-bold ">Today Revenue</label>
      <br/>
      <label className="text-2xl font-bold ml-4">$ 1000</label>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChartPage;
