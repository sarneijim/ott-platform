import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";

const setChartConfig = data => {
  return {
    type: "scatter",
    data: {
      datasets: [
        {
          pointStyle: "line",
          showLine: true,
          fill: false,
          borderColor: "#0000FF",
          pointRadius: 0,
          data: data.map(item => {
            return {
              x: item.timestamp,
              y: item.value
            };
          })
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              unit: "minute",
              displayFormats: {
                minute: "HH:mm"
              },
              tooltipFormat: "HH:mm"
            },
            scaleLabel: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: false
            }
          }
        ]
      },
      title: {
        display: false
      }
    }
  };
};
const TimeChart = () => {
  const chartContainer = useRef(null);
  const [_chartInstance, setChartInstance] = useState(null);

  useEffect(
    () => {
      async function fetchData() {
        const data = await fetch(
          "https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data"
        )
          .then(res => res.json())
          .then(res => {
            return res;
          })
          .catch(error => console.error(error));
        if (chartContainer && chartContainer.current) {
          const chartConfig = setChartConfig(data);
          const newChartInstance = new Chartjs(
            chartContainer.current,
            chartConfig
          );
          setChartInstance(newChartInstance);
        }
      }
      fetchData();
    },
    [chartContainer]
  );

  return <canvas ref={chartContainer} />;
};

export default TimeChart;
