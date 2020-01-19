import React, { useState } from "react";
import GoalEntry from "./GoalEntry";

function calculateScoreFromGoal({ lastScore, goal }) {}

const GoalList = ({ goals }) => {
  let scoreHome = 0;

  return (
    <>
      <ul>
        {goals.map(goal => {
          const {
            ScoreTeam1: nextScoreHome,
            MatchMinute: matchMinute,
            GoalGetterName: playerName
          } = goal;

          const isHomeGoal = nextScoreHome !== scoreHome;

          const goalLine = (
            <GoalEntry
              isHomeGoal={isHomeGoal}
              matchMinute={matchMinute}
              playerName={playerName}
            />
          );
          scoreHome = nextScoreHome;
          return goalLine;
        })}
      </ul>
      <style jsx>
        {`
          ul {
            padding-top: 0.1em;
            padding-bottom: 0.1em;
          }
        `}
      </style>
    </>
  );
};

export default GoalList;
