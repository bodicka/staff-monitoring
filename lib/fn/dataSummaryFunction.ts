import { DashboardSummary, EmployeeDataType } from "@/types";

export const dataSummaryFunction = (
  data: EmployeeDataType[]
): DashboardSummary => {
  const totalEmployees = data.length;
  const activeToday = data.filter(
    (e) => e.status !== "offline" && e.todayHour !== "0.0"
  ).length;
  const totalProductivity = data.reduce(
    (sum, e) => sum + e.productivitiyScore,
    0
  );
  const avgProd =
    activeToday > 0 ? Math.round(totalProductivity / activeToday) : 0;

  const totalDistractions = data.reduce(
    (sum, e) => sum + e.timeSpentOnDistractions,
    0
  );
  const totalTask = data.reduce((sum, e) => sum + e.timeSpenOnTasks, 0);
  const totalTracked = totalDistractions + totalTask;
  const distractionPercentage =
    totalTracked > 0 ? Math.round((totalDistractions / totalTracked) * 100) : 0;

  return {
    totalEmployees,
    activeToday,
    averageProductivity: avgProd,
    distractionPercentage: distractionPercentage,
  };
};
