import "./ScoreChart.scss";
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
          borderWidth: 1.5,
          borderColor: "#00aedb",
          backgroundColor: "#00aedb",
          data: [3, 2, 3, 4, 5, 4, 5],
          spanGaps: false
        },
        {
          label: "Fatigue",
          borderWidth: 1.5,
          borderColor: "#8ec127",
          backgroundColor: "#8ec127",
          data: [2, 1, 3, 3, 3, 4, 4],
          spanGaps: false
        },
        {
          label: "Stress",
          borderWidth: 1.5,
          borderColor: "#a200ff",
          backgroundColor: "#a200ff",
          data: [4, 2, 3, 5, 5, 3, 2],
          spanGaps: false
        },
        {
          label: "Soreness",
          borderWidth: 1.5,
          borderColor: "#d41243",
          backgroundColor: "#d41243",
          data: [1, 1, 3, 4, 3, 4, 2],
          spanGaps: false
        },
        {
          label: "Motivation",
          borderWidth: 1.5,
          borderColor: "#f47835",
          backgroundColor: "#f47835",
          data: [4, 4, 3, 2, 5, 4, 3],
          spanGaps: false
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
    <div className="category-chart">
      <Line options={chartOptions} data={chartData}/>
    </div>
  );
}

export default ScoreChart;
