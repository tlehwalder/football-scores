import React from "preact";
import {useContext, useState} from "preact/hooks";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { BREAKPOINT_MEDIUM_IN_PX } from "../layout/breakpoints";

import GoalList from "./GoalList";
import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const MatchEntry = ({ match }) => {
  const theme = useContext(ThemeContext);

  const [isGoalListShown, setGoalListShown] = useState(false);

  const teamHomePoints = get(match, "MatchResults[0].PointsTeam1", "-");
  const teamAwayPoints = get(match, "MatchResults[0].PointsTeam2", "-");

  const {
    Team1: teamHome,
    Team2: teamAway,
    MatchIsFinished: isFinished,
    Goals: goals,
  } = match;

  const { TeamName: teamHomeName, TeamIconUrl: teamHomeIcon } = teamHome;
  const { TeamName: teamAwayName, TeamIconUrl: teamAwayIcon } = teamAway;

  const isAnyGoalScored = !isEmpty(goals);

  const toggleGoalList = () => setGoalListShown(!isGoalListShown);

  const scoreLineInner = isAnyGoalScored ? (
    <div onClick={toggleGoalList}>
      {teamHomePoints}:{teamAwayPoints}
    </div>
  ) : (
    <>
      {teamHomePoints}:{teamAwayPoints}
    </>
  );

  return (
    <>
      <li className="score-line-wrapper">
        <div className="score-line">
          <div className="score-line-element score-line-start">
            <span className="home-team team-name">{teamHomeName}</span>
            <img src={teamHomeIcon} />
          </div>
          <div className="score-line-element score-line-inner">
            {scoreLineInner}
          </div>
          <div className="score-line-element score-line-end">
            <img src={teamAwayIcon} />
            <span className="team-name">{teamAwayName}</span>
          </div>
        </div>
        {isGoalListShown ? <GoalList goals={goals} /> : null}
      </li>
      <style jsx>{`
        .score-line {
          display: flex;
          margin: 5px 0;
          display: grid;
          grid-template-columns: 4fr 1fr 4fr;
        }
        .score-line-element {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .score-line-inner {
          cursor: ${isAnyGoalScored ? "pointer" : "initial"};
          font-weight: ${isFinished ? "bold" : "initial"};


        }

        .score-line-inner:hover {
            color: #949494;
        }

        .score-line-start {
          justify-content: flex-end;
          justify-self: flex-end;
        }
        .score-line-end {
          justify-content: start;
          justify-self: start;
        }

        img {
          margin: 0 10px;
          max-width: 1.3em;
          max-height: 1.3em;
          flex-shrink: 0;
        }
        .home-team {
          display: flex;
          flex-direction: row-reverse;
        }

        .team-name {
          flex-shrink: 0;
        }

        li {
          list-style: none;
        }

        .score-line-wrapper:nth-of-type(2n+1) {
          background-color: #ff6600;
          color: white;
        }
        @media (max-width: ${BREAKPOINT_MEDIUM_IN_PX}) {
          .team-name {
            display: none;
          }

      `}</style>
    </>
  );
};

export default MatchEntry;
