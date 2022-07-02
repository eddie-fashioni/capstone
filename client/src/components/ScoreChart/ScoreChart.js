import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend, 
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, 
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  );

function ScoreChart() {

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [          
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"],
      datasets: [
        {
          label: "Sleep",
          data: [3, 2, 3, 4, 5, 4, 5]
        },
        {
          label: "Fatigue",
          data: [2, 1, 3, 3, 3, 4, 4]
        },
        {
          label: "Stress",
          data: [4, 2, 3, 5, 5, 3, 2]
        },
        {
          label: "Soreness",
          data: [1, 1, 3, 4, 3, 4, 2]
        },
        {
          label: "Motivation",
          data: [4, 4, 3, 2, 5, 4, 3]
        }
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
        display: true,
        text: "Weekly Summary"
        }
      }
    })
}, [])

  return (
    <>
      <Line options={chartOptions} data={chartData}/>
    </>
  );
}

export default ScoreChart;
