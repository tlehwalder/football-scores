import React from "react";

const Main = ({ children }) => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
      rel="stylesheet"
    />
    <div className="main">{children}</div>
    <style jsx global>{`
      body {
        background-color: ghostwhite;
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
      `}
    </style>
  </>
);

export default Main;
