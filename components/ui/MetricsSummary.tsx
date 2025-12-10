import MetricBox from "./MetricBox";
import { actionsReports, quickMetrikDataHome } from "@/data";
import Link from "next/link";

const MetricsSummary = () => {
  return (
    <aside className="space-y-4">
      <h2>Сводка по Команде</h2>
      <p className="text-sm opacity-70 -mt-4">Ключевые показатели сегодня.</p>
      {/* Быстрые Метрики */}
      {quickMetrikDataHome.map((data) => (
        <MetricBox
          key={data.id}
          title={data.title}
          value={data.value}
          iconName={data.iconName}
          color={data.color}
        />
      ))}
      <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
        <h3>Быстрые Отчеты</h3>
        <ul className="space-y-2 mt-3">
          {actionsReports.map((actions, index) => (
            <li key={index}>
              <Link className={actions.className} href={actions.href}>
                {actions.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default MetricsSummary;
