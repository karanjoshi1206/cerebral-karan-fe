import { IScore } from "@/models/dashboard";
import React from "react";
import ScoreGauge from "../ui/scoreGauge/scoreGauge";

const Score = async () => {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", "Basic dHJpYWw6YXNzaWdubWVudDEyMw==");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const data = await fetch("http://3.111.196.92:8020/api/v1/sample_assignment_api_3/", requestOptions);
  const score: IScore = await data.json();

  return (
    <div className="bg-white rounded-xl p-8 ">
      <ScoreGauge score={score.score} maxScore={100} />

      <div className="h-0.5 w-[100%] bg-gray-200 my-8"></div>

      {/* bottom */}
      <div className="font-bold text-lg mb-2">{score.title}!</div>
      <div className="text-gray-500 font-extrabold text-sm">{score.message}</div>
      <button className="mt-8 rounded-full flex items-center border-gray-200 border-2 p-2 px-4 text-sm gap-1 text-gray-600 font-bold">Improve your scores</button>
    </div>
  );
};

export default Score;
