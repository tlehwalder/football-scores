import React from "preact";
import {useContext} from "preact/hooks";
import MatchEntry from "./MatchEntry";
import { BREAKPOINT_MEDIUM_IN_PX } from "../layout/breakpoints";
import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const MatchList = ({ matches }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <ul>
        {matches.map((match, _i) => {
          return <MatchEntry key={_i} match={match} />;
        })}
      </ul>
      <style jsx>
        {`
        ul {
          padding: 1rem;
          box-shadow: 0 2px 6px 0 hsla(0, 0%, ${
            theme === THEME_DARK ? "100%" : "0%"
          }, 0.2);
          border-radius: 12px;
          font-size: x-large;
          width: 85%;
        }
        @media (max-width: ${BREAKPOINT_MEDIUM_IN_PX}) {
          ul {
            width: 100%;
          }
      `}
      </style>
    </>
  );
};

export default MatchList;
