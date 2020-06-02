import React from "react";
import ThemeContext from "../context/ThemeContext";
import startCase from "lodash/startCase";

const Main = ({ children }) => {
  const theme = React.useContext(ThemeContext);
  const [themeToggleState, setThemeToggleState] = React.useState(theme);

  function toggleTheme() {
    setThemeToggleState(themeToggleState === "dark" ? "light" : "dark");
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
        rel="stylesheet"
      />
      <ThemeContext.Provider value={themeToggleState}>
        <span onClick={toggleTheme}>{startCase(themeToggleState)}</span>
        <div className="main">{children}</div>
      </ThemeContext.Provider>
      <style jsx global>{`
        body {
          background-color: ${themeToggleState === "dark"
            ? "#282828"
            : "ghostwhite"};
          color: ${themeToggleState === "dark" ? "white" : "black"};
          font-family: "Nunito", sans-serif;
        }
      `}</style>
      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          span {
            display: flex;
            flex-direction: row-reverse;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Main;
