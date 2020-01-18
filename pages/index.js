import fetch from "isomorphic-unfetch";
import get from "lodash/get";

const Scores = props => {
  return (
    <div className="main">
      <h1>
        <span className="header-prefix">Latest Bundesliga&nbsp;</span>Scores ⚽
      </h1>
      <ul>
        {props.matches.map(match => {
          const pointsTeam1 = get(match, "MatchResults[0].PointsTeam1", "-");
          const pointsTeam2 = get(match, "MatchResults[0].PointsTeam2", "-");
          return (
            <li>
              <div className="score-line">
                <div className="score-line-element score-line-start">
                  <span className="home-team team-name">
                    {match.Team1.TeamName}
                  </span>
                  <img src={match.Team1.TeamIconUrl} />
                </div>
                <div className="score-line-element">
                  {pointsTeam1}:{pointsTeam2}
                </div>
                <div className="score-line-element score-line-end">
                  <img src={match.Team2.TeamIconUrl} />
                  <span className="team-name">{match.Team2.TeamName}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <style jsx global>{`
        body {
          background-color: ghostwhite;
          font-family: sans;
        }
      `}</style>
      <style jsx>
        {`
          h1 {
            display: flex;
          }
          ul {
            padding: 0;
            width: 50%;
            box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
            border-radius: 12px;
          }

          li {
            list-style: none;
          }

          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

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

          li:nth-of-type(odd) {
            background-color: #eee;
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

          @media (max-width: 980px) {
            ul {
              width: 100%;
            }

            .team-name {
              display: none;
            }
            @media (max-width: 580px) {
            .header-prefix {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Scores;

Scores.getInitialProps = async function() {
  const res = await fetch("https://www.openligadb.de/api/getmatchdata/bl1");
  const data = await res.json();

  return {
    matches: data
  };
};
