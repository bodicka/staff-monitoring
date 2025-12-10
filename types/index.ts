export type HeaderDataType = {
  id: number;
  headerLink: string;
  href: string;
};

export type EmployeeDataType = {
  id: string;
  name: string;
  position: string;
  role: "Frontend" | "Backend" | "Designer" | "QA";
  status: "online" | "offline" | "on-break" | "in-meeting";
  avatarUrl: string;
  lastActive: string;
  todayHour: string;
  productivitiyScore: number;
  timeSpenOnTasks: number;
  timeSpentOnDistractions: number;
};

export type DashboardSummary = {
  totalEmployees: number;
  activeToday: number;
  averageProductivity: number;
  distractionPercentage: number;
};

export interface EmployeeCardProps {
  employee: EmployeeDataType;
}

export interface MetrickBoxProps {
  title: string;
  value: string;
  iconName: QuickMetrickTypes["iconName"];
  color: string;
}

export type LatestEventsTypes = {
  id: number;
  time: string;
  events: string;
};

export type QuickMetrickTypes = {
  id: string;
  title: string;
  value: string;
  iconName:
    | "Zap"
    | "BarChart2"
    | "Clock"
    | "Users"
    | "TrendingUp"
    | "AlertTriangle";
  color: string;
};

export type ActionsReportsType = {
  id: number;
  href: string;
  className: string;
  description: string;
};

export type EmployeeEvent = {
  id: string;
  employeeId: string;
  employeeName: string;
  role: EmployeeDataType["role"];
  time: string;
  events: string;
  status?: EmployeeDataType["status"];
  category?: "task" | "distraction" | "meeting" | "other";
  duration?: string;
};
