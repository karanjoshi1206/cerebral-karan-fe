import { ChevronDown } from "lucide-react";
import Stats from "./components/dashboard/stats";
import Score from "./components/dashboard/score";
import FeedBack from "./components/dashboard/feedback";
import CustomersDevice from "./components/dashboard/customersDevice";
import Comparison from "./components/dashboard/comparison";
import TopProducts from "./components/dashboard/topProducts/topProduct";

export default function Home() {
  return (
    <div className="m-4 w-full flex gap-4">
      <div className="bg-white rounded-xl p-10 py-10 w-[76%] flex flex-col gap-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-2 items-center font-semibold text-gray-600">
            <span>Compare to</span>
            <button className="rounded-full flex items-center border-gray-300 border-2 p-2 px-4 text-sm gap-1">
              <span> Last year</span>
              <ChevronDown />
            </button>
          </div>
        </div>
        <Stats />
        <Comparison />
        <TopProducts />
      </div>

      <div className="w-[24%] ">
        <div className="flex flex-col gap-4">
          <Score />
          <CustomersDevice />
          <FeedBack />
        </div>
      </div>
    </div>
  );
}
