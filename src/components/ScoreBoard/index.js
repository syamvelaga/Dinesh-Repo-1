import ScoreContext from "../../context/ScoreContext";
import Cookies from "js-cookie";
import { FaHandsClapping } from "react-icons/fa6";
import "./index.css";

const ScoreBoard = () => {
  const username = Cookies.get("username");

  const getMins = (time) => {
    const mins = Math.floor(time / 60);
    return mins < 10 ? `0${mins}` : `${mins}`;
  };

  const getSeconds = (time) => {
    const secs = time % 60;
    return secs < 10 ? `0${secs}` : `${secs}`;
  };

  return (
    <ScoreContext.Consumer>
      {(value) => {
        const { score, time } = value;
        const mins = getMins(time);
        const seconds = getSeconds(time);
        return (
          <div className="score-page-container">
            <h1 className="react-tiles-head">React Tiles</h1>
            <div className="score-time-container">
              <h1 className="score-time-heading">Score: {score}</h1>
              <h1 className="score-time-heading">
                Time: {mins}:{seconds}
              </h1>
            </div>
            <div className="game-results-container">
              <div className="welcome-user-container">
                <h1 className="welcome-heading">Welcome {username}</h1>
                <FaHandsClapping className="welcome-icon" />
                <FaHandsClapping className="welcome-icon" />
              </div>
              <h1 className="game-finished-heading">Game Finished!</h1>
              <h1 className="final-score-time-heading">Score: {score}</h1>
              <h1 className="final-score-time-heading">
                Time Taken: {mins}:{seconds}
              </h1>
            </div>
          </div>
        );
      }}
    </ScoreContext.Consumer>
  );
};

export default ScoreBoard;
