"use client";
import { employeeEvents } from "@/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ActionDistractionsChart = () => {
  const categoryCounts = employeeEvents.reduce((acc, event) => {
    if (event.category) {
      acc[event.category] = (acc[event.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const dataChart = [
    {
      name: "Задачи",
      value: categoryCounts.task || 0,
      fill: "#10b981",
    },
    {
      name: "Отвлечения",
      value: categoryCounts.distraction || 0,
      fill: "#ef4444",
    },
    {
      name: "Встречи",
      value: categoryCounts.meeting || 0,
      fill: "#3b82f6",
    },
    {
      name: "Прочее",
      value: categoryCounts.other || 0,
      fill: "#6b7280",
    },
  ];

  return (
    <div className="w-full h-full min-h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dataChart}
          margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            className="dark:stroke-zinc-800"
          />
          <XAxis
            dataKey="name"
            stroke="var(--foreground)"
            className="text-xs"
            tick={{ fontSize: 11 }}
          />
          <YAxis
            stroke="var(--foreground)"
            className="text-xs"
            tick={{ fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--foreground)",
              borderRadius: "8px",
            }}
            formatter={(value: number) => [`${value} событий`, "Количество"]}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {dataChart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActionDistractionsChart;
