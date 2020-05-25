import fetch from "isomorphic-unfetch";

import Header from "../components/Header";
import MatchList from "../components/MatchList";
import Main from "../layout/Main";

const Scores = (props) => {
  return (
    <Main>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
        rel="stylesheet"
      />
      <Header />
      <MatchList matches={props.matches} />
      <style jsx global>{`
        body {
          background-color: ghostwhite;
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </Main>
  );
};

export default Scores;

Scores.getInitialProps = async function () {
  const res = await fetch("https://www.openligadb.de/api/getmatchdata/bl1");
  const data = await res.json();

  return {
    matches: data,
  };
};
