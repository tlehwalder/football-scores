import React, { useState } from "react";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { BREAKPOINT_MEDIUM_IN_PX } from "../layout/breakpoints";

import GoalList from "./GoalList";

const MatchEntry = ({ match }) => {
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
      <li>
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
        }

        .score-line-inner {
          cursor: ${isAnyGoalScored ? "pointer" : "initial"};
          font-weight: ${isFinished ? "bold" : "initial"};
          color: ${isFinished ? "initial" : "#85144b"}
        }

        .score-line-start {
          justify-content: end;
          justify-self: end;
        }
        .score-line-end {
          justify-content: start;
          justify-self: start;
        }

        img {
          margin: 0 10px;
          max-width: 1.3em;
          max-height: 1.3em;
        }
        .home-team {
          display: flex;
          flex-direction: row-reverse;
        }

        .team-name {
          white-space: nowrap;
        }

        li {
          list-style: none;
        }

        li:nth-of-type(odd) {
          background-color: #f2f2f2;
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
