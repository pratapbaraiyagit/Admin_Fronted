import React from "react";
import { Chart } from "react-google-charts";
export const data = [
    ["Global", "Service level", "Negotiated"],
    [25, 12, 10],
    [20, 52, 85],
    [50, 10, 41],
    [98, 12, 63],
    [45, 63, 41],
    [20, 52, 88],
    [12, 10, 41],
  ];
  
  export const options = {
    title: "Charges of subatomic particles",
    legend: { position: "top", maxLines: 2 },
    colors: ["#5C3292", "#1A8763", "#871B47", "#999999"],
    interpolateNulls: false,
  };
const Histogram= ()=>{
    return(
        <Chart
        chartType="Histogram"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    )
}
export default Histogram