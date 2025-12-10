"use client";
import ActionDistractionsChart from "@/components/charts/ActionDistractionsChart";
import ProductivityByRoleChart from "@/components/charts/ProductivityByRoleChart";
import TaskDistractionChart from "@/components/charts/TaskDistractionChart";
import EmployeeCard from "@/components/ui/EmployeeCard";
import MetricBox from "@/components/ui/MetricBox";
import { employeeEvents, quickMetrikDataDashboard, teamData } from "@/data";
import { categoryColors } from "@/lib/constants";
import { EmployeeDataType } from "@/types";

export const randomUser: EmployeeDataType[] = teamData.slice(0, 2);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickMetrikDataDashboard.map((metrick) => (
          <MetricBox
            key={metrick.id}
            title={metrick.title}
            value={metrick.value}
            iconName={metrick.iconName}
            color={metrick.color}
          />
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="section-box p-4 lg:col-span-2 h-[360px]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Продуктивность по ролям</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Средний % по активным
            </span>
          </div>
          <div className="h-[300px]">
            <ProductivityByRoleChart />
          </div>
        </div>
        <div className="section-box p-4 h-[360px]">
          <h3 className="text-lg font-semibold mb-3">Задачи vs Отвлечения</h3>
          <div className="h-[300px]">
            <TaskDistractionChart />
          </div>
        </div>
      </section>
      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
          {teamData.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
        <div className="lg:col-span-4 space-y-4">
          <div className="section-box p-4 sticky top-4">
            <h3 className="font-semibold text-lg mb-4">Последние события</h3>
            <ul className="space-y-3">
              {employeeEvents.map((events) => (
                <li
                  key={events.id}
                  className="flex items-start gap-3 text-sm pb-3 border-b border-gray-100 dark:border-zinc-800 last:border-0"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-mono whitespace-nowrap ">
                    {events.time}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">
                        {events.employeeName}
                      </span>
                      <span className="text-[11px] px-2 py-[2px] rounded-full bg-gray-100 dark:bg-zinc-800">
                        {events.role}
                      </span>
                      {events.category && (
                        <span
                          className={`text-[11px] px-2 py-[2px] rounded-full ${
                            categoryColors[events.category] ||
                            categoryColors.other
                          }`}
                        >
                          {events.category}
                        </span>
                      )}
                      {events.duration && (
                        <span className="text-[11px] text-blue-500 dark:text-blue-400">
                          {events.duration}
                        </span>
                      )}
                      {events.status && (
                        <span className="text-[11px] capitalize text-gray-500 dark:text-gray-400">
                          {events.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed">{events.events}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-box p-4">
            <h3 className="font-semibold text-lg mb-3">
              Действия и Отвлечения
            </h3>
            <div className="h-[250px]">
              <ActionDistractionsChart />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
