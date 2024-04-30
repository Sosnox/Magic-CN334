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
      position: 'top'
    },
  },
};

const BarChartPage = ({ data }) => {
  // const [label, setLabel] = useState([]);
  // const [data1, setData1] = useState([]);

  // if (data) {
    // const Data = data.data;
    // const Data1 = Object.values(Data);
  //   setData1(Data1[0]?.data);
  //   setLabel(Data1[0]?.label);
  // }

  // const chartData = {
  //   labels: label,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: data1,
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     }
  //   ],
  // };
  // data.array.forEach(element => {
    
  // });
  console.log(data)

  return (
    <div className='w-full h-full'>
      <label className="text-3xl font-bold ">Today Revenue</label>
      <p className="text-2xl font-bold ml-4">$ 1000</p>
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
}

export default BarChartPage;
