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
import finger from "../../assets/images/finger.svg";

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
    let timeStamp = scores.map((score) => {
      return score.scores.map((timestamp) => {
        return timestamp.timestamp;
      });
    });
    let timeStampArr = [];
      timeStamp.forEach((timestamp) => {
      timeStampArr.push(...timestamp.splice(-7));
    });

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

    setChartData({
      labels:
        timeStampArr,
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
          ticks: {
            callback: function (value, index, ticks) {
              if (value < 1 || value > 5) {
                return "";
              } else {
                return value;
              }
            },
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
  }, [scores]);

  return (
    <>
      <div className="category-chart">
        <Line options={chartOptions} data={chartData} />
      </div>
      <div className="chart-help">
        <img
          className="chart-help__image"
          src={finger}
          alt="finger pointing right"
        />
        <p className="chart-help__message">
          You can click the categories on the legend above to only show those
          selected.<br></br>
          Check for any possible links between your scores and focus on
          improving those areas!
        </p>
      </div>
    </>
  );
}

export default CategoryChart;
