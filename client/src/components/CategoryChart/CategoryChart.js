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

function CategoryChart({ scores }) {
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
        "Sunday",
      ],

      datasets: [
        {
          label: "Sleep",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#00aedb",
          backgroundColor: "#00aedb",
          data: sleepArr,
        },
        {
          label: "Fatigue",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#8ec127",
          backgroundColor: "#8ec127",
          data: fatigueArr,
        },
        {
          label: "Stress",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#f47835",
          backgroundColor: "#f47835",
          data: stressArr,
        },
        {
          label: "Soreness",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#d41243",
          backgroundColor: "#d41243",
          data: sorenessArr,
        },
        {
          label: "Motivation",
          borderWidth: 1.5,
          hoverBorderWidth: 10,
          borderColor: "#a200ff",
          backgroundColor: "#a200ff",
          data: motivationArr,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 6,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Weekly Summary for Category Scores",
          padding: 20,
        },
      },
    });
  }, []);

  let sleepScores = scores.map((score) => {
    return score.scores.map((sleep) => {
      return sleep.sleep;
    });
  });
  let sleepArr = [];
  sleepScores.forEach((score) => {
    sleepArr.push(...score.splice(-7));
  });

  let fatigueScores = scores.map((score) => {
    return score.scores.map((fatigue) => {
      return fatigue.fatigue;
    });
  });
  let fatigueArr = [];
  fatigueScores.forEach((score) => {
    fatigueArr.push(...score.splice(-7));
  });

  let stressScores = scores.map((score) => {
    return score.scores.map((stress) => {
      return stress.stress;
    });
  });
  let stressArr = [];
  stressScores.forEach((score) => {
    stressArr.push(...score.splice(-7));
  });

  let sorenessScores = scores.map((score) => {
    return score.scores.map((soreness) => {
      return soreness.soreness;
    });
  });
  let sorenessArr = [];
  sorenessScores.forEach((score) => {
    sorenessArr.push(...score.splice(-7));
  });

  let motivationScores = scores.map((score) => {
    return score.scores.map((motivation) => {
      return motivation.motivation;
    });
  });
  let motivationArr = [];
  motivationScores.forEach((score) => {
    motivationArr.push(...score.splice(-7));
  });

  return (
    <div className="category-chart">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default CategoryChart;
