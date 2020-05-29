import React from "react";

const Header = ({ matchDay }) => (
  <>
    <header>
      <h1>
        <span className="header-prefix">Latest Bundesliga&nbsp;</span>Scores ⚽{" "}
        <span className="matchday-suffix">Matchday {matchDay}</span>
      </h1>
    </header>
    <style jsx>
      {`
        h1 {
          display: flex;
          align-items: center;
        }
        .matchday-suffix {
          font-size: small;
          margin-left: 1rem;
          color: #959595;
        }
        @media (max-width: 580px) {
            .header-prefix {
              display: none;
            }
      `}
    </style>
  </>
);

export default Header;
