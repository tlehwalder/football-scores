import Header from "../components/Header";
import MatchList from "../components/MatchList";
import MatchDayNavigation from "../components/MatchDayNavigation";
import Main from "../layout/Main";
import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const MatchDayPage = ({ matches, matchDay }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Main>
      <Header matchDay={matchDay} />
      <MatchList matches={matches} />
      <MatchDayNavigation matchDay={matchDay} />{" "}
      <style jsx global>{`
        body {
          background-color: ${theme === THEME_DARK ? "#282828" : "ghostwhite"};
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </Main>
  );
};

export default MatchDayPage;
