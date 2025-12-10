import { EmployeeEvent } from "@/types";

export const statusClasses = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  "on-break": "bg-yellow-500",
  "in-meeting": "bg-blue-500",
};

export const COLORS = ["#3b82f6", "#ef4444"];

export const styleLiActionsReports: string =
  "text-blue-500 hover:text-blue-400 transition block";

export const categoryColors: Record<
  NonNullable<EmployeeEvent["category"]>,
  string
> = {
  task: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200",
  distraction: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200",
  meeting: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200",
  other: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",
};
