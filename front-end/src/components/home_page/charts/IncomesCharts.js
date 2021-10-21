import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import "./IncomesCharts.css";

function PieChart () {

    const [incomes, setincomes] = useState([]);
    const request = async () => {
      await axios
        .get("http://localhost:8000/api/getallincomesjoincategory")
        .then((response) => {
          setincomes(response.data);
        });
    };
    useEffect(() => {
      request();
    }, []);
let incomescategory = incomes.map(function(element){
    return `${element.categories_name} `;
})
let incomesrevenue = incomes.map(function (element) {
  return `${element.revenue} `;
});

    const data = {
      labels: [...incomescategory],
      datasets: [
        {
          label: "# of Votes",
          data: [...incomesrevenue],
          backgroundColor: [
            "#FFF462",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "#FFF462",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div>
        <Pie data={data} />
      </div>
    )

    return (
      
      <>
        <div className="header">
         
          <div className="links"></div>
        </div>
        <div className="ABincomecontainer">
          <div className="ABincomecontent">
            <Pie data={data} />
          </div>
        </div>
      </>
    );
    }
export default PieChart;
