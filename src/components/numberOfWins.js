import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import iplData from "../data/iplData";

const labelsArr = [];

for (let i = 0; i < iplData.length; i++) {
    if (!labelsArr.includes(iplData[i].winner) && iplData[i].winner !== "") {
        // console.log(iplData[i].winner)
        labelsArr.push(iplData[i].winner)
    }
}

let numberOfWins = [];

for(let i = 0; i < labelsArr.length; i++) {
    let count = 0;
    for(let j = 0; j < iplData.length; j++) {
        if(labelsArr[i] === iplData[j].winner) {
            count++
        }
    }
    numberOfWins.push(count);
}

const BarChart = () => {
    const labels = labelsArr;
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Number of Matches Won by Team",
                backgroundColor:  [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                  ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                  ],
                borderWidth: 1,
                data: numberOfWins,
            },
        ],
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;