import React from "react";

const ScoreContext = React.createContext({
  score: 0,
  updateScore: () => {},
  time: 0,
  updateTime: () => {},
});

export default ScoreContext;
