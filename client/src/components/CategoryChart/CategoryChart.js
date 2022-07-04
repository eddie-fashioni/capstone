import "./CategoryChart.scss";
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

function CategoryChart ({ scores }) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  // Add JSON data below
  // *last 7 timestamp entries to labels array*
  // *last 7 category scores to datasets objects*

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
          label: "Sleep",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#00aedb",
          backgroundColor: "#00aedb",
          data: [3, 2, 3, 4, 5, 4, 5],
        },
        {
          label: "Fatigue",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#8ec127",
          backgroundColor: "#8ec127",
          data: [2, 1, 3, 3, 3, 4, 4],
        },
        {
          label: "Stress",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#f47835",
          backgroundColor: "#f47835",
          data: [4, 2, 3, 5, 5, 3, 2],
        },
        {
          label: "Soreness",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#d41243",
          backgroundColor: "#d41243",
          data: [1, 1, 3, 4, 3, 4, 2],
        },
        {
          label: "Motivation",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#a200ff",
          backgroundColor: "#a200ff",
          data: [4, 4, 3, 2, 5, 4, 3],
        },
      ],
    });
    setChartOptions({
      responsive: true,
      layout: {
        padding: 25,
      },
      scales: {
        y: {
          min: 0.5,
          max: 5.5,
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Weekly Summary for Category Scores",
          padding: 5,
        },
      },
    });
  }, []);

  return (
    <div className="category-chart">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default CategoryChart;
