import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

const data = [
    {
      "timestamp": 1625616000000,
      "value": 1021936
    },
    {
      "timestamp": 1625618160000,
      "value": 1011837
    },
    {
      "timestamp": 1625620320000,
      "value": 1024278
    },
    {
      "timestamp": 1625622480000,
      "value": 1038110
    },
    {
      "timestamp": 1625624640000,
      "value": 1032680
    },
    {
      "timestamp": 1625626800000,
      "value": 1048462
    },
    {
      "timestamp": 1625628960000,
      "value": 1044107
    },
    {
      "timestamp": 1625631120000,
      "value": 1089940
    },
    {
      "timestamp": 1625633280000,
      "value": 1102014
    },
    {
      "timestamp": 1625635440000,
      "value": 1142717
    },
    {
      "timestamp": 1625637600000,
      "value": 1167773
    },
    {
      "timestamp": 1625639760000,
      "value": 1130749
    },
    {
      "timestamp": 1625641920000,
      "value": 1150751
    },
    {
      "timestamp": 1625644080000,
      "value": 1149782
    },
    {
      "timestamp": 1625646240000,
      "value": 1166024
    },
    {
      "timestamp": 1625648400000,
      "value": 1185991
    },
    {
      "timestamp": 1625650560000,
      "value": 1201601
    },
    {
      "timestamp": 1625652720000,
      "value": 1168765
    },
    {
      "timestamp": 1625654880000,
      "value": 1166263
    },
    {
      "timestamp": 1625657040000,
      "value": 1168156
    },
    {
      "timestamp": 1625659200000,
      "value": 1187084
    },
    {
      "timestamp": 1625661360000,
      "value": 1231359
    },
    {
      "timestamp": 1625663520000,
      "value": 1262523
    },
    {
      "timestamp": 1625665680000,
      "value": 1309487
    },
    {
      "timestamp": 1625667840000,
      "value": 1306484
    },
    {
      "timestamp": 1625670000000,
      "value": 1304425
    },
    {
      "timestamp": 1625672160000,
      "value": 1325060
    },
    {
      "timestamp": 1625674320000,
      "value": 1338551
    },
    {
      "timestamp": 1625676480000,
      "value": 1323828
    },
    {
      "timestamp": 1625678640000,
      "value": 1369320
    }
  ];
  

const TimeChart = () => {
    const chartConfig = {
        type: 'scatter',
        data: {
          datasets: [{
            label: "Humidity 1",
            pointStyle: 'line',
            showLine: true,
            fill: false,
            borderColor: '#0000FF',
            pointRadius: 0,
            data: data.map(item => { return {
              x: item.timestamp, 
              y: item.value,
            }} ),
          }]
        },
        options: {
          legend: {
            display:false,
          },
          scales: {
            xAxes: [{
              type: 'time',        
              time: {
                unit: 'minute',
                displayFormats: {
                  minute: 'HH:mm'
                },
                tooltipFormat: 'HH:mm'
              },
              scaleLabel: {
                display: false,
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                // // // beginAtZero: true,
                // // stepValue: 5,
                // min: 50000
              },
              scaleLabel: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          }
        }
    };

  const chartContainer = useRef(null);
  const [_chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <canvas ref={chartContainer} />
  );
};

export default TimeChart;