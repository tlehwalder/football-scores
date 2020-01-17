import fetch from "isomorphic-unfetch";
import get from "lodash/get";

const Scores = props => {
  return (
    <>
      <h1>Latest Bundesliga Scores</h1>
      <ul>
        {props.matches.map(match => {
          const pointsTeam1 = get(match, "MatchResults[0].PointsTeam1", "-");
          const pointsTeam2 = get(match, "MatchResults[0].PointsTeam2", "-");
          return (
            <li>
              <div className="score-line">
                <span className="home-team">{match.Team1.TeamName}</span>
                <img src={match.Team1.TeamIconUrl} />
                <span>
                  {pointsTeam1}:{pointsTeam2}
                </span>
                <img src={match.Team2.TeamIconUrl} />
                <span>{match.Team2.TeamName}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <style jsx global>{`
        body {
          font-family: sans;
        }
      `}</style>
      <style jsx>
        {`
          ul {
            padding: 0;
          }

          li {
            list-style: none;
          }

          .score-line {
            display: flex;
            margin: 5px 0;
            display: grid;
            grid-template-columns: 0.2fr 42px 30px 0.01fr 0.2fr;
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
        `}
      </style>
    </>
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
