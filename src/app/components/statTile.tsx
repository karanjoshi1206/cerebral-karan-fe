import { IStat } from "@/models/dashboard";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const StateTile: React.FC<IStat> = (stat) => {
  return (
    <div className="border-2 border-gray-200 rounded-md flex-1 p-4">
      <p className="capitalize text-sm font-extrabold text-gray-400">{stat?.title}</p>

      <div className="flex items-center gap-4 pt-4">
        <div className="text-2xl font-bold ">{(+stat.value)?.toLocaleString()}</div>
        <div className={`text-[12px] font-semibold w-fit p-2 py-1 rounded-full ${stat.changed === "increased" ? "text-green-500 bg-green-200" : "text-red-500  bg-red-200"} flex items-center gap-1`}>
          <span>
            {stat.changed === "increased" ? "+" : "-"} {stat.changedBy}
          </span>
          <span>{stat.changed === "increased" ? <TrendingUp size={16} /> : <TrendingDown />}</span>
        </div>
      </div>
    </div>
  );
};

export default StateTile;
