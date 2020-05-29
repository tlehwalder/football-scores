import Header from "../components/Header";
import MatchList from "../components/MatchList";
import MatchDayNavigation from "../components/MatchDayNavigation";
import Main from "../layout/Main";

const MatchDayPage = ({ matches, matchDay }) => {
  return (
    <Main>
      <Header matchDay={matchDay} />
      <MatchList matches={matches} />
      <MatchDayNavigation matchDay={matchDay} />{" "}
      <style jsx global>{`
        body {
          background-color: ghostwhite;
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </Main>
  );
};

export default MatchDayPage;
