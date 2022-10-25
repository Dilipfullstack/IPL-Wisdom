import iplData from '../data/iplData';
import Chart from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TeamPerfomanceYoY = () => {
    const year = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
    const [team, setTeam] = useState("Sunrisers Hyderabad");
    const [winYoY, setWinYoY] = useState([]);


    const AllTeams = [
        "Sunrisers Hyderabad",
        "Rising Pune Supergiant",
        "Kolkata Knight Riders",
        "Kings XI Punjab",
        "Royal Challengers Bangalore",
        "Mumbai Indians",
        "Delhi Daredevils",
        "Gujarat Lions",
        "Chennai Super Kings",
        "Rajasthan Royals",
        "Deccan Chargers",
        "Pune Warriors",
        "Kochi Tuskers Kerala"
    ];


    useEffect(() => {
        const tempWinYoY = []
        for (let j = 0; j < year.length; j++) {
            let currentYear = year[j];
            let win = 0;
            for (let k = 0; k < iplData.length; k++) {
                if (iplData[k].winner === team && iplData[k].season === currentYear) {
                    win++
                }
            }
            // console.log(currentYear, win)
            tempWinYoY.push(win);
        }
        setWinYoY(tempWinYoY);
    }, [team]);

    const data = {
        labels: year,
        datasets: [
            {
                label: `Team : ${team}`,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: winYoY,
            },
        ],
    };
    console.log(winYoY)


    const handleTeam = (e) => {
        setTeam(e.target.value)
    }

    return (
        <>
            <label>Select Your Favourite Team Here :
                <select value={team} onChange={handleTeam}>
                    {AllTeams.map((a) => {
                        return <option value={a}>{a}</option>
                    })}
                </select>
            </label>
            <Line data={data} />
        </>
    )
};

export default TeamPerfomanceYoY;