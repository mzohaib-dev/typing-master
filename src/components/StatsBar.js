import React from "react";

const StatsBar = ({ timeLeft, wpm, cpm, errors, corrects, resetGame }) => {
  return (
    <div className="list-bar">
      <li className="timer">
        Timer(s): <span>{timeLeft}s</span>
      </li>
      <li className="wpm">
        WPM: <span>{wpm}</span>
      </li>
      <li className="cpm">
        CPM: <span>{cpm}</span>
      </li>
      <li className="error">
        Errors: <span>{errors}</span>
      </li>
      <li className="correct">
        Correct: <span>{corrects}</span>
      </li>
      <button className="restart" onClick={resetGame}>
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export default StatsBar;
