import { useContext } from "react";

import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const GoalEntry = ({ isHomeGoal, playerName, matchMinute }) => {
  const theme = useContext(ThemeContext);

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
          grid-template-columns: 4fr 0.3fr 4fr;
          list-style: none;
          font-size: 11px;
        }

        .goal-home {
          display: flex;
          justify-content: end;
          justify-self: end;
          margin-right: 3em;
        }
      `}</style>
    </>
  );
};

export default GoalEntry;
