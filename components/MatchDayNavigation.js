import { useContext } from "preact/hooks";
import Link from "next/link";
import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const MatchDayNavigaiton = ({ matchDay }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      {matchDay >= 1 ? (
        <Link href={`/${parseInt(matchDay) - 1}`}>
          <a className="triangle-left" title="previous matchday"></a>
        </Link>
      ) : null}
      {matchDay <= 33 ? (
        <Link href={`/${parseInt(matchDay) + 1}`}>
          <a className="triangle-right" title="next matchday"></a>
        </Link>
      ) : null}

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          width: 7rem;
        }
        a {
          text-decoration: none;
          font-size: xx-large;
        }

        .triangle-left,
        .triangle-right {
          width: 0;
          height: 0;
          margin: 30px auto;
        }
        .triangle-left,
        .triangle-right {
          border-top: 18px solid transparent;
          border-bottom: 18px solid transparent;
        }

        .triangle-right {
          border-left: 30px solid ${theme === THEME_DARK ? "white" : "black"};
        }
        .triangle-left {
          border-right: 30px solid ${theme === THEME_DARK ? "white" : "black"};
        }

        .triangle-right:hover {
          border-left: 30px solid #6a6a6a;
        }
        .triangle-left:hover {
          border-right: 30px solid #6a6a6a;
        }
      `}</style>
    </div>
  );
};

export default MatchDayNavigaiton;
