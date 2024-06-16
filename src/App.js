import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import ScoreContext from "./context/ScoreContext";
import "./App.css";

class App extends Component {
  state = { score: 0, time: 0 };

  updateScore = (value) => {
    this.setState({ score: value });
  };

  updateTime = (value) => {
    this.setState({ time: value });
  };

  render() {
    const { score, time } = this.state;
    return (
      <ScoreContext.Provider
        value={{
          score,
          time,
          updateScore: this.updateScore,
          updateTime: this.updateTime,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={GameBoard} />
            <Route exact path="/score" component={ScoreBoard} />
            <Redirect to="/login" />
          </Switch>
        </>
      </ScoreContext.Provider>
    );
  }
}

export default App;
