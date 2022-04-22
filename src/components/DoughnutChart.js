import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const DoughnutChart = ({ data }) => {
  const chartConfig = {
    type: "doughnut",
    data: {
      labels: ["Sky Go", "Now Tv", "Peacock"],
      datasets: [
        {
          data: [data["sky-go"], data["now-tv"], data["peacock"]],
          backgroundColor: ["#D00965", "#09676C", "#5F5BA1"],
          hoverOffset: 4
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      aspectRatio: 1
    }
  };

  const chartContainer = useRef(null);
  const [_chartInstance, setChartInstance] = useState(null);

  useEffect(
    () => {
      if (chartContainer && chartContainer.current) {
        const newChartInstance = new Chartjs(
          chartContainer.current,
          chartConfig
        );
        setChartInstance(newChartInstance);
      }
    },
    [chartContainer]
  );

  return <canvas ref={chartContainer} />;
};

export default DoughnutChart;
