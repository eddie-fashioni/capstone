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

function TotalChart ({ scores }) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    let totalScores = scores.map((score) => {
      return score.scores.map((total) => {
        return total.total;
      });
    });
    let totalArr = [];
    totalScores.forEach((total) => {
      totalArr.push(...total.splice(-7));
    });

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
          data: totalArr
        }
      ]
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 30,
          grid: {
            display: false
          },
          ticks: {
            callback: function(value, index, ticks) {
              if (value < 5 || value > 25) {
                return '';
              }
              else {
                return value;
              }
            }
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
  }, [scores]);

  return (
    <div className="total-chart">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default TotalChart;