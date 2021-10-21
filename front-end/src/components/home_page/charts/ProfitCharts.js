import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "./ProfitCharts.css";
import axios from "axios";


function DoughnutChart () {
const [profit,setprofit] = useState();
 const request = async () => {
   await axios.get("http://localhost:8000/api/getresult").then((response) => {
     setprofit(response.data);
     
   });
 };
 useEffect(() => {
   request();
 }, []);
  const data = {
    labels: ["Profit "+profit +'%'],
    datasets: [
      {
        label: "Company Profit",
        data: [profit, 100-profit],
        backgroundColor: ["#E8C574", "rgb(255,255,255)"],
        borderColor: ["#E8C574", "rgb(255,255,255)"],
        borderWidth: 1,
      },
    ],
  };
  return(
  <>
    <div className="header">
      <div className="links"></div>
    </div>
    <div className="ABcontainer">
      <div className="ABcontent">
        <h1 className="ABh1">{profit}%</h1>
        <Doughnut  data={data} />
      </div>
    </div>
  </>
);
  }
export default DoughnutChart;
