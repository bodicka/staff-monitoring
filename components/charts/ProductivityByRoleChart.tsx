import { teamData } from "@/data";
import getRoleProductivityData from "@/lib/fn/getRoleProductivityData";
import {
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const ProductivityByRoleChart = () => {
  const data = getRoleProductivityData(teamData);
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            className="dark:stroke-zinc-800"
          />
          <XAxis
            dataKey="role"
            stroke="var(--foreground)"
            className="text-xs"
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            stroke="var(--foreground)"
            className="text-xs"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--foreground)",
              borderRadius: "8px",
            }}
            labelFormatter={(label) => `Роль: ${label}`}
            formatter={(value) => [`${value}`, "Ср. Продуктивность"]}
          />
          <Bar
            dataKey="score"
            fill="#3b82f6"
            name="Продуктивность"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductivityByRoleChart;
