"use client";
import React from "react";
import "./scoreGauge.scss";
const ScoreGauge = ({ score, maxScore }: { score: number; maxScore: number }) => {
  return (
    <div className="flex justify-center">
      <div className="mask">
        <div className="semi-circle"></div>
        <div className="semi-circle--mask"></div>
        <div className="score-container">
          <p className="score">{score}</p>
          <p className="total">of {maxScore} points</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreGauge;
