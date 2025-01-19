import { ChevronDown } from "lucide-react";
import Stats from "../../components/dashboard/stats";
import Comparison from "../../components/dashboard/comparison";
import TopProducts from "../../components/dashboard/topProducts/topProduct";
import Score from "../../components/dashboard/score";
import FeedBack from "../../components/dashboard/feedback";
import CustomerDevice from "../../components/dashboard/customersDevice";

const Dashboard = async () => {
  return (
    <div className="mt-6 w-full flex flex-col gap-4 md:flex-row md:m-4">
      <div className="bg-white rounded-xl p-0 py-0  flex flex-col gap-4 md:w-[76%] md:p-10 md:py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg md:text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-2 items-center font-semibold text-gray-600">
            <span className="text-sm">Compare to</span>
            <button className="rounded-full  flex items-center border-gray-300 border-2 p-2 text-xs md:p-2 md:px-4 md:text-sm gap-1">
              <span> Last year</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
        <Stats />
        <Comparison />
        <TopProducts />
      </div>

      <div className="md:w-[24%] ">
        <div className="flex flex-col gap-4">
          <Score />
          <CustomerDevice />
          <FeedBack />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
