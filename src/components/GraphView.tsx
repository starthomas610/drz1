import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
const NUM_DATA_POINTS = 400;

export function getData() {
  const data: Array<{ year: number; spending: number }> = [];
  for (let i = 0; i < NUM_DATA_POINTS; i++) {
    data.push({
      year: new Date().getFullYear() - NUM_DATA_POINTS + i,
      spending:
        i === 0 ? random() * 100 : data[i - 1].spending + random() * 10 - 5,
    });
  }
  return data;
}

let seed = 1234;
function random() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}

const ChartExample = () => {
  const [options, setOptions] = useState({
    zoom: {
        enabled: true,
        enableSelecting: true,
        panKey: "shift",
      },
    tooltip: {
      enabled: false,
    },
    axes: [
      {
        type: "number",
        position: "left",
      },
      {
        type: "number",
        position: "bottom",
        nice: false,
        interval: {
          minSpacing: 80,
          maxSpacing: 120,
        },
        label: {
          autoRotate: false,
        },
      },
    ],
    data: getData(),
    series: [
      {
        type: "line",
        xKey: "year",
        yKey: "spending",
      },
    ],
  });

  return <AgCharts options={options as any} />;
};
export default function Component() {
   
  return (
    
    <div className="ruler-page">
      <h2 className="mb-5 text-2xl font-heading m400:text-xl">aaa</h2>
      <ChartExample />
    </div>
  )
}
