import { useState } from "react";

function App() {
  
  const [scoresCount,setScoresCount] = useState(76);
  const [wicketsCount, setWicketsCount] = useState(2);
  const [ballsCount, setBallCount] = useState(50);
  const addScores = (v) => {
    setScoresCount(scoresCount+v);
  }
  const addWickets = (v) => {
    setWicketsCount(wicketsCount+v);
  }
  const addBalls = (v) => {
    setBallCount(ballsCount+v);
  }
  // if(scoresCount>100){
  //   return;
  // }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              scoresCount
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicketsCount
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ballsCount
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{if(scoresCount>100){return} addScores(+1);}}>Add 1</button>
        <button className="addScore4" onClick={()=>{ if(scoresCount>100){return} addScores(+4);}}>Add 4</button>
        <button className="addScore6" onClick={()=>{ if(scoresCount>100){return} addScores(+6);}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{
          if(wicketsCount>=12 || scoresCount>100){
            return;
          } addWickets(+1);}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{ if(scoresCount>100){return} addBalls(+1);}}>Add 1</button>
      </div>

      <h1>{scoresCount>100 ? "India Won":" "}</h1>
    </div>
  );
}

export default App;