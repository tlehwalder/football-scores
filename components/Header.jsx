import React from "react";

const Header = () => (
  <>
    <header>
      <h1>
        <span className="header-prefix">Latest Bundesliga&nbsp;</span>Scores ⚽
      </h1>
    </header>
    <style jsx>
      {`
        h1 {
          display: flex;
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
