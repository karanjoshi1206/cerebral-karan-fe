import { IFeedback } from "@/models/dashboard";
import React from "react";

const FeedBack = async () => {
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Authorization", "Basic dHJpYWw6YXNzaWdubWVudDEyMw==");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const data = await fetch("http://3.111.196.92:8020/api/v1/sample_assignment_api_5/", requestOptions);
  const feedback: IFeedback = await data.json();

  const positive = feedback.positive;
  const negative = feedback.negative;
  const neutral = feedback.neutral;

  console.log("feedback", feedback);

  const mostly = Object.entries(feedback).sort(([, valueA], [, valueB]) => valueB - valueA)[0]?.[0];

  return (
    <div className="bg-white rounded-xl p-8">
      <div className="text-sm text-gray-500 font-bold ">Community feedback</div>
      <div className="text-xl text-black font-bold pt-2 capitalize">Mostly {mostly}</div>
      <div className="my-4 flex w-full gap-0.5">
        <div className="h-2 p-1 rounded-sm bg-red-300 hover:bg-red-500" style={{ width: `${negative}%` }}></div>
        <div className="h-2 p-1 rounded-sm bg-yellow-300 hover:bg-yellow-500" style={{ width: `${neutral}%` }}></div>
        <div className="h-2 p-1 rounded-sm bg-green-300 hover:bg-green-500" style={{ width: `${positive}%` }}></div>
      </div>
      <div className="flex gap-4 ">
        <div className="">
          <div className="text-sm text-gray-500 font-bold ">Negative</div>
          <div className="text-sm text-black font-bold pt-1">{negative}</div>
        </div>

        <div className="">
          <div className="text-sm text-gray-500 font-bold ">Neutral</div>
          <div className="text-sm text-black font-bold pt-1">{neutral}</div>
        </div>
        <div className="">
          <div className="text-sm text-gray-500 font-bold ">Positive</div>
          <div className="text-sm text-black font-bold pt-1">{positive}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
