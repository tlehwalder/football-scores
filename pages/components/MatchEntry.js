import React, { useState } from "react";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

import GoalList from "./GoalList";

const MatchEntry = ({ match }) => {
  const [isGoalsShown, setGoalsShown] = useState(false);

  const pointsTeam1 = get(match, "MatchResults[0].PointsTeam1", "-");
  const pointsTeam2 = get(match, "MatchResults[0].PointsTeam2", "-");

  const scoreLineInner = isEmpty(match.Goals) ? (
    <>
      {pointsTeam1}:{pointsTeam2}
    </>
  ) : (
    <div onClick={() => setGoalsShown(!isGoalsShown)}>
      {pointsTeam1}:{pointsTeam2}
    </div>
  );

  return (
    <>
      <li>
        <div className="score-line">
          <div className="score-line-element score-line-start">
            <span className="home-team team-name">{match.Team1.TeamName}</span>
            <img src={match.Team1.TeamIconUrl} />
          </div>
          <div
            className={`score-line-element ${
              match.MatchIsFinished ? "finished-match" : "on-going-match"
            } ${isEmpty(match.Goals) ? "" : "expandable"}`}
          >
            {scoreLineInner}
          </div>
          <div className="score-line-element score-line-end">
            <img src={match.Team2.TeamIconUrl} />
            <span className="team-name">{match.Team2.TeamName}</span>
          </div>
        </div>
        {isGoalsShown ? <GoalList goals={match.Goals} /> : null}
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
        .score-line-start {
          justify-content: end;
        }
        .score-line-end {
          justify-content: start;
        }

        .finished-match {
          font-weight: bold;
        }

        .expandable {
          cursor: pointer;
        }

        .on-going-match {
          color: #85144b;
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

        li {
          list-style: none;
        }

        li:nth-of-type(odd) {
          background-color: #f2f2f2;
        }
      `}</style>
    </>
  );
};

export default MatchEntry;
