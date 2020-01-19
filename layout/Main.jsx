import React from "react";

const Main = ({ children }) => (
  <>
    <div className="main">{children}</div>
    <style jsx global>{`
      body {
        background-color: ghostwhite;
        font-family: sans;
      }
    `}</style>
    <style jsx>
      {`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}
    </style>
  </>
);

export default Main;
