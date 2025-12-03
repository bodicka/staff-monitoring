import { QuickMetrickTypes } from "@/types";
import { BarChart2, Clock, Zap } from "lucide-react";
import MetricBox from "./MetricBox";
import { actionsReports } from "@/data";

const quickMetrikData: QuickMetrickTypes[] = [
  {
    id: 1,
    title: "Онлайн Сотрудников",
    value: "15 / 20",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-green-600",
  },
  {
    id: 2,
    title: "Общая Продуктивность",
    value: "78%",
    icon: <BarChart2 className="w-5 h-5" />,
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Среднее Время Работы",
    value: "6.5 ч",
    icon: <Clock className="w-5 h-5" />,
    color: "bg-purple-600",
  },
];

const MetricsSummary = () => {
  return (
    <aside className="space-y-4">
      <h2>Сводка по Команде</h2>
      <p className="text-sm opacity-70 -mt-4">Ключевые показатели сегодня.</p>
      {/* Быстрые Метрики */}
      {quickMetrikData.map((data, idx) => (
        <MetricBox
          key={idx}
          title={data.title}
          value={data.value}
          icon={data.icon}
          color={data.color}
        />
      ))}
      <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
        <h3>Быстрые Отчеты</h3>
        <ul className="space-y-2 mt-3">
          {actionsReports.map((actions, index) => (
            <li key={index}>
              <a className={actions.className} href={actions.href}>
                {actions.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default MetricsSummary;
