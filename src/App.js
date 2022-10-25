import './App.css';
// import iplData from './data/iplData';
import BarChart from './components/numberOfWins';
import TossAndMatchResultOnIndianGround from './components/tossAndMatchResultOnIndianGround';
import TeamPerfomanceYoY from './components/teamPerfomaceYoY';
import { useState } from 'react';

function App() {
  const trivia = [
    {
      "id": "1",
      "description": `Did you ever ask which team won how many games in all sessions so far? We know the answer. 
        Please refer the below bar graph to find out the number of matches won by each team.`
    },
    {
      "id": "2",
      "description": `Have you ever wondered if the home ground would give any advantage if a team decides to field first. 
        Statistically "Yes". 55% of such decision are in favour. Refer the below doughnut chart.`
    },
    {
      "id": "3",
      "description": `Now we leave it to you check the perfomance per year of the teams. Select
        your favourite team (or rival team) and you can argue on how the team performed over the year 
        with the data`
    }
  ]

  const [triviaPage, setTriviaPage] = useState(1);

  const handleTrivia = (e) => {
    setTriviaPage(e)
  }

  return (
    <div className="App">
      <div className={`trivia-button first-box ${triviaPage === 1 ? "selected" : ""}`} onClick={() => handleTrivia(1)}>Trivia-1</div> 
      <div className={`trivia-button ${triviaPage === 2 ? "selected" : ""}`} onClick={() => handleTrivia(2)}>Trivia-2</div>
      <div className={`trivia-button ${triviaPage === 3 ? "selected" : ""}`} onClick={() => handleTrivia(3)}>Trivia-3</div>
      <br/>
      <br/>
      <div>
        {triviaPage === 1 &&
          <>
            <h3 className='description'>{trivia[0].description}</h3>
            <div className='illustration'><BarChart /></div>
          </>
        }
        {triviaPage === 2 &&
          <>
            <h3 className='description'>{trivia[1].description}</h3>
            <div className='illustration doughnut'><TossAndMatchResultOnIndianGround /></div>
          </>
        }
        {triviaPage === 3 &&
          <>
            <h3 className='description'>{trivia[2].description}</h3>
            <div className='illustration'><TeamPerfomanceYoY /></div>
          </>
        }
      </div>
    </div>
  );
}

export default App;