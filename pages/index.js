import fetch from "isomorphic-unfetch";

import MatchEntry from "./components/MatchEntry";
import Header from "./components/Header";

const Scores = props => {
  return (
    <div className="main">
      <Header />
      <ul>
        {props.matches.map(match => {
          return <MatchEntry match={match} />;
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
          ul {
            padding: 0;
            width: 50%;
            box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
            border-radius: 12px;
          }

          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          @media (max-width: 980px) {
            ul {
              width: 100%;
            }

            .team-name {
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
