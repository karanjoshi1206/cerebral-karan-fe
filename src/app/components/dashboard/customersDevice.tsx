"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { ICustomerFeedback } from "@/models/dashboard";

const chartConfig = {
  unique_count: {
    label: "Unique Count",
    color: "hsl(var(--chart-1))"
  },
  cumulative_tweets: {
    label: "Cumulative Tweets",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

function CustomerDevice() {
  const [chartData, setChartData] = useState<ICustomerFeedback[]>([]);
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Authorization", "Basic dHJpYWw6YXNzaWdubWVudDEyMw==");

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const data = await fetch("http://3.111.196.92:8020/api/v1/sample_assignment_api_4/", requestOptions);
    const feedback: ICustomerFeedback[] = await data.json();

    setChartData(feedback);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <XAxis dataKey="date2" tickLine={false} axisLine={true} tickMargin={8} tickFormatter={() => ""} />
            <YAxis tickLine={false} axisLine={true} tickMargin={8} label={{ angle: -90, position: "insideLeft", offset: -10 }} /> <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line dataKey="unique_count" type="monotone" stroke="var(--color-unique_count)" strokeWidth={2} dot={false} />
            <Line dataKey="cumulative_tweets" type="monotone" stroke="var(--color-cumulative_tweets)" strokeWidth={2} dot={false} />
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
