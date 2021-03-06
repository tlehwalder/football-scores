import fetch from "isomorphic-unfetch";

import MatchDayPage from "../components/MatchDay";

const Scores = ({ matchDay, matches }) => {
  return <MatchDayPage matchDay={matchDay} matches={matches} />;
};

export default Scores;

Scores.getInitialProps = async function () {
  const res = await fetch("https://www.openligadb.de/api/getmatchdata/bl1");
  const data = await res.json();

  return {
    matches: data,
    matchDay: data[0].Group.GroupOrderID,
  };
};
