import iplData from "../data/iplData";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const foreignGround = ["Cape Town", "Port Elizabeth", "Durban", "Centurion", "East London", "Johannesburg", "Kimberley", "Bloemfontein", "Abu Dhabi", "Sharjah"]

function winPercentageOnHomeGround(arr) {
    let win = 0;
    let loss = 0;
    for(let i = 0; i < arr.length; i++) {
        if(!foreignGround.includes(arr[i].city) && arr[i].toss_decision === "field") {
            if(arr[i].toss_winner === arr[i].winner) {
                win++
            } else {
                loss++
            }
        }
    }
    return [win, loss]
}

console.log(winPercentageOnHomeGround(iplData));

const labels = ["Win", "Loss"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Numbers Of Win On Home Ground When The Team Won The Toss And Decides To Chase",
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
            borderColor: "rgb(0,0,255)",
            data: winPercentageOnHomeGround(iplData),
        },
    ],
};

const TossAndMatchResultOnIndianGround = () => {
    return (
        <div>
            <Doughnut data={data} />
        </div>
    );
};

export default TossAndMatchResultOnIndianGround;