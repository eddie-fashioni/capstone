import "./TotalChart.scss";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    let timeStamp = scores.map((score) => {
      return score.scores.map((timestamp) => {
        return timestamp.timestamp;
      });
    });
    let timeStampArr = [];
      timeStamp.forEach((timestamp) => {
      timeStampArr.push(...timestamp.splice(-7));
    });

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
      labels: 
      timeStampArr,
      datasets: [
        {
          label: "Total",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "black",
          backgroundColor: "#e9e9e9",
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
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default TotalChart;