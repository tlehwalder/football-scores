import React from "react";
import ThemeContext, { THEME_LIGHT, THEME_DARK } from "../context/ThemeContext";
import startCase from "lodash/startCase";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const Main = ({ children }) => {
  const cookies = parseCookies();
  const theme = React.useContext(ThemeContext);
  const [themeToggleState, setThemeToggleState] = React.useState(cookies.theme);

  function toggleTheme() {
    const nextTheme =
      themeToggleState === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setThemeToggleState(nextTheme);
    setCookie(null, "theme", nextTheme, {
      path: "/",
    });
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
          background-color: ${themeToggleState === THEME_DARK
            ? "#282828"
            : "ghostwhite"};
          color: ${themeToggleState === THEME_DARK ? "white" : "black"};
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
