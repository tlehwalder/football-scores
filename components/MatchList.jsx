import React from "react";
import MatchEntry from "./MatchEntry";
import { BREAKPOINT_MEDIUM_IN_PX } from "../layout/breakpoints";

const MatchList = ({ matches }) => (
  <>
    <ul>
      {matches.map((match, _i) => {
        return <MatchEntry key={_i} match={match} />;
      })}
    </ul>
    <style jsx>
      {`
        ul {
          padding: 0;
          width: 50%;
          box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
          border-radius: 12px;
        }
        @media (max-width: ${BREAKPOINT_MEDIUM_IN_PX}) {
          ul {
            width: 100%;
          }
      `}
    </style>
  </>
);

export default MatchList;
