"use client";
import useSheetData from "@/app/hooks/useSheetData";

import { ChevronDown } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartConfig = {
  last_year: {
    label: "Last Year",
    color: "hsl(var(--chart-1))"
  },
  this_year: {
    label: "This Year",
    color: "hsl(var(--chart-2))"
  }
} satisfies ChartConfig;

function Comparison() {
  const [chartData, setChartData] = useState<any[]>([]);
  const { sheetData } = useSheetData();

  useEffect(() => {
    if (sheetData?.sheet1)
      setChartData(
        sheetData?.sheet1?.map((item) => {
          return {
            month: item.Month,
            last_year: item.Last_year,
            this_year: item.This_year
          };
        })
      );
  }, [sheetData]);

  return (
    <Card className="border-none shadow-none">
      <div className="flex justify-between items-center mb-4">
        <CardTitle className="text-xl font-bold">Comparison</CardTitle>

        <button className="rounded-full  flex items-center border-gray-300 border-2 p-2 text-xs md:p-2 md:px-4 md:text-sm gap-1">
          <span> 6 months</span>
          <ChevronDown size={16} />
        </button>
      </div>

      <CardContent className="p-0">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => value?.toLocaleString()} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="last_year" fill="var(--color-this_year)" radius={4} />
            <Bar dataKey="this_year" fill="var(--color-last_year)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="justify-center items-start gap-5 text-sm">
        <div className="text-sm text-gray-500 font-bold flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-chart-1 block"></span> This year
        </div>

        <div className="text-sm text-gray-500 font-bold flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm bg-chart-2 block"></span> Last year
        </div>
      </CardFooter>
    </Card>
  );
}

export default Comparison;
