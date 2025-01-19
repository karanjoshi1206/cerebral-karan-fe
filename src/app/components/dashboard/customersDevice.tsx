"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { ICustomerFeedback } from "@/models/dashboard";
import useSheetData from "@/app/hooks/useSheetData";

const chartConfig = {
  offline_sales: {
    label: "Offline Sales",
    color: "hsl(var(--chart-1))"
  },
  web_sales: {
    label: "Web Sales",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

function CustomerDevice() {
  const [chartData, setChartData] = useState<ICustomerFeedback[]>([]);
  const { sheetData } = useSheetData();
  const fetchData = async () => {
    const feedBackData: ICustomerFeedback[] = sheetData?.sheet3?.map((item) => {
      return {
        offline_sales: item.offline_sales,
        date: item.date,
        web_sales: item.web_sales
      };
    });

    setChartData(feedBackData);
  };

  useEffect(() => {
    fetchData();
  }, [sheetData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Customers by device</CardTitle>
      </CardHeader>
      <CardContent className="mr-4 p-0">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis interval="preserveStartEnd" dataKey="date" tickLine={false} axisLine={true} tickMargin={8} tickFormatter={() => ""} />
            <YAxis tickLine={false} axisLine={true} tickMargin={4} label={{ angle: -90, position: "insideLeft", offset: -10 }} /> <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="offline_sales" type="monotone" stroke="var(--color-offline_sales)" strokeWidth={2} dot={false} />
            <Line dataKey="web_sales" type="monotone" stroke="var(--color-web_sales)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex gap-4 ">
          <div className="">
            <div className="text-sm text-gray-500 font-bold flex items-center gap-2">
              Web sales <span className="h-3 w-3 rounded-sm bg-chart-1 block"></span>
            </div>
            <div className="text-sm text-black font-bold pt-1">1023%</div>
          </div>

          <div className="">
            <div className="text-sm text-gray-500 font-bold flex items-center gap-2">
              Offline <span className="h-3 w-3 rounded-sm bg-chart-2 block"></span>
            </div>
            <div className="text-sm text-black font-bold pt-1">234%</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CustomerDevice;
