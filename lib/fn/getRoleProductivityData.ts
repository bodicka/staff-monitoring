import { EmployeeDataType } from "@/types";

const getRoleProductivityData = (data: EmployeeDataType[]) => {
  const roleMap: Record<string, { totalScore: number; count: number }> = {};

  data.forEach((employee) => {
    const role = employee.role;
    if (!roleMap[role]) {
      roleMap[role] = { totalScore: 0, count: 0 };
    }
    if (employee.productivitiyScore > 0) {
      roleMap[role].totalScore += employee.productivitiyScore;
      roleMap[role].count++;
    }
  });

  return Object.keys(roleMap)
    .filter((role) => roleMap[role].count > 0)
    .map((role) => ({
      role: role,
      score: Math.round(roleMap[role].totalScore / roleMap[role].count),
    }));
};

export default getRoleProductivityData;
