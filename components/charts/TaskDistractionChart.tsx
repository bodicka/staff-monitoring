import { teamData } from "@/data";
import { COLORS } from "@/lib/constants";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

const TaskDistractionChart = () => {
  const totalTask = teamData.reduce((sum, e) => sum + e.timeSpenOnTasks, 0);
  const totalDistractions = teamData.reduce(
    (sum, e) => sum + e.timeSpentOnDistractions,
    0
  );
  const totalTime = totalTask + totalDistractions;

  if (totalTime === 0) {
    return (
      <div className="text-center text-gray-500 p-8">
        Нет данных по активности.
      </div>
    );
  }

  const data = [
    {
      name: "Продуктивные Задачит",
      value: totalTask,
      percentage: (totalTask / totalTime) * 100,
    },
    {
      name: "Отвлечения",
      value: totalDistractions,
      percentage: (totalDistractions / totalTime) * 100,
    },
  ];

  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingBottom: "10px" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskDistractionChart;
