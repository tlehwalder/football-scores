import React from "react";

const GoalEntry = ({ isHomeGoal, playerName, matchMinute }) => {
  const homeGoal = isHomeGoal ? playerName : null;
  const awayGoal = !isHomeGoal ? playerName : null;

  return (
    <>
      <li className="goal-line">
        <span className="goal-home">{homeGoal}</span>
        <span>{matchMinute}'</span>
        <span>{awayGoal}</span>
      </li>
      <style jsx>{`
        .goal-line {
          display: flex;
          margin: 5px 0;
          display: grid;
          grid-template-columns: 8fr 1fr 8fr;
          list-style: none;
          font-size: 11px;
          color: #aaa;
        }

        .goal-home {
          display: flex;
          justify-content: end;
          margin-right: 3em;
        }
      `}</style>
    </>
  );
};

export default GoalEntry;
