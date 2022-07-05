import "./TotalChart.scss";
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
  Legend
);

function TotalChart ({ total }) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  // Add JSON data below 
  // *last 7 timestamp entries to labels array*
  // *last 7 total scores to datasets objects*

  useEffect(() => {
    setChartData({
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Total",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "black",
          backgroundColor: "black",
          data: [14, 12, 15, 17, 11, 13, 16]
        }
      ]
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 25,
          grid: {
            display: false
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Weekly Summary for Total Score",
          padding: 20,
        },
      },
    });
  }, []);

  return (
    <div className="total-chart">
      <Line options={chartOptions} data={chartData} />
      <h1>{total}</h1>
    </div>
  );
}

export default TotalChart;