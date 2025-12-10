import { styleLiActionsReports } from "@/lib/constants";
import { dataSummaryFunction } from "@/lib/fn/dataSummaryFunction";
import {
  ActionsReportsType,
  EmployeeDataType,
  EmployeeEvent,
  HeaderDataType,
  LatestEventsTypes,
  QuickMetrickTypes,
} from "@/types";
import { generateId } from "@/utils/generateId";

export const headerData: HeaderDataType[] = [
  {
    id: 1,
    headerLink: "Home",
    href: "/",
  },
  {
    id: 2,
    headerLink: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    headerLink: "Personal",
    href: "/personal",
  },
  {
    id: 4,
    headerLink: "Monitoring",
    href: "/monitoring",
  },
];

export const latestEvents: LatestEventsTypes[] = [
  {
    id: 1,
    time: "10:05",
    events: "Начало рабочего дня. Статус: Online.",
  },
  {
    id: 2,
    time: "14:00",
    events: "Обнаружено отвлечение (YouTube).",
  },
  {
    id: 3,
    time: "15:30",
    events: "Перерыв на обед. Статус: On Break.",
  },
  {
    id: 4,
    time: "16:30",
    events: "Возвращение к работе.",
  },
  {
    id: 5,
    time: "20:30",
    events: "Активность в IDE. Статус: Online.",
  },
];

export const actionsReports: ActionsReportsType[] = [
  {
    id: 1,
    href: "/dashboard",
    className: styleLiActionsReports,
    description: "Отчет по отвлечениям",
  },
  {
    id: 2,
    href: "/personal",
    className: styleLiActionsReports,
    description: "Сводка по неделе",
  },
  {
    id: 3,
    href: "/monitoring",
    className: styleLiActionsReports,
    description: "Текущий скриншот",
  },
];

// ------------------- ДАННЫЕ СОТРУДНИКОВ -------------------
export const testEmployeeData: EmployeeDataType = {
  id: generateId(),
  name: "Алексей Смирнов",
  position: "Senior Frontend Developer",
  role: "Frontend",
  status: "online",
  avatarUrl:
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611783.jpg?semt=ais_items_boosted&w=740",
  lastActive: "Сейчас (20:30)",
  todayHour: "7ч 45м",
  productivitiyScore: 88,
  timeSpenOnTasks: 6.5,
  timeSpentOnDistractions: 0.8,
};

export const teamData: EmployeeDataType[] = [
  {
    id: generateId(),
    name: "Алексей Смирнов",
    position: "Senior Dev",
    role: "Frontend",
    status: "online",
    avatarUrl:
      "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611783.jpg?semt=ais_items_boosted&w=740",
    lastActive: "Сейчас",
    todayHour: "7.8",
    productivitiyScore: 88,
    timeSpenOnTasks: 6.5,
    timeSpentOnDistractions: 0.8,
  },
  {
    id: generateId(),
    name: "Игорь Петров",
    position: "Backend Lead",
    role: "Backend",
    status: "online",
    avatarUrl:
      "https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png",
    lastActive: "Сейчас",
    todayHour: "8.1",
    productivitiyScore: 95,
    timeSpenOnTasks: 7.5,
    timeSpentOnDistractions: 0.2,
  },
  {
    id: generateId(),
    name: "Мария Иванова",
    position: "Junior Dev",
    role: "Frontend",
    status: "on-break",
    avatarUrl: "https://cdn-icons-png.freepik.com/256/7341/7341458.png",
    lastActive: "1 час назад",
    todayHour: "5.2",
    productivitiyScore: 88,
    timeSpenOnTasks: 4.0,
    timeSpentOnDistractions: 0.5,
  },
  {
    id: generateId(),
    name: "Елена Козлова",
    position: "UX Designer",
    role: "Designer",
    status: "in-meeting",
    avatarUrl: "https://cdn-icons-png.freepik.com/256/7341/7341458.png",
    lastActive: "2 час назад",
    todayHour: "4.0",
    productivitiyScore: 60,
    timeSpenOnTasks: 2.5,
    timeSpentOnDistractions: 1.0,
  },
  {
    id: generateId(),
    name: "Дмитрий Смирнов",
    position: "QA Engineer",
    role: "Frontend",
    status: "offline",
    avatarUrl:
      "https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png",
    lastActive: "Вчера",
    todayHour: "0.0",
    productivitiyScore: 0,
    timeSpenOnTasks: 0,
    timeSpentOnDistractions: 0,
  },
  {
    id: generateId(),
    name: "Владислав Митров",
    position: "Junior Dev",
    role: "Frontend",
    status: "online",
    avatarUrl:
      "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611783.jpg?semt=ais_items_boosted&w=740",
    lastActive: "Сейчас",
    todayHour: "5.0",
    productivitiyScore: 70,
    timeSpenOnTasks: 4.5,
    timeSpentOnDistractions: 1.0,
  },
];

export const quickMetrikDataHome: QuickMetrickTypes[] = [
  {
    id: generateId(),
    title: "Онлайн Сотрудников",
    value: "15 / 20",
    iconName: "Zap",
    color: "bg-green-600",
  },
  {
    id: generateId(),
    title: "Общая Продуктивность",
    value: "78%",
    iconName: "BarChart2",
    color: "bg-blue-600",
  },
  {
    id: generateId(),
    title: "Среднее Время Работы",
    value: "6.5 ч",
    iconName: "Clock",
    color: "bg-blue-600",
  },
];

const summary = dataSummaryFunction(teamData);

export const quickMetrikDataDashboard: QuickMetrickTypes[] = [
  {
    id: generateId(),
    title: "Всего Сотрудников",
    value: summary.totalEmployees.toString(),
    iconName: "Users",
    color: "bg-indigo-600",
  },
  {
    id: generateId(),
    title: "Активны Сегодня",
    value: summary.activeToday.toString(),
    iconName: "Clock",
    color: "bg-green-600",
  },
  {
    id: generateId(),
    title: "Ср. Продуктивность",
    value: `${summary.averageProductivity}%`,
    iconName: "TrendingUp",
    color: "bg-blue-600",
  },
  {
    id: generateId(),
    title: "Время Отвлечений",
    value: `${summary.distractionPercentage}%`,
    iconName: "AlertTriangle",
    color: "bg-red-600",
  },
];

export const employeeEvents: EmployeeEvent[] = [
  {
    id: generateId(),
    employeeId: teamData[0].id,
    employeeName: teamData[0].name,
    role: teamData[0].role,
    time: "09:55",
    events: "Логин в систему. Статус: Online.",
    status: "online",
    category: "task",
    duration: "10 мин",
  },
  {
    id: generateId(),
    employeeId: teamData[1].id,
    employeeName: teamData[1].name,
    role: teamData[1].role,
    time: "10:40",
    events: "Код-ревью завершено. Мерж в main.",
    status: "online",
    category: "task",
    duration: "30 мин",
  },
  {
    id: generateId(),
    employeeId: teamData[2].id,
    employeeName: teamData[2].name,
    role: teamData[2].role,
    time: "11:10",
    events: "Перерыв. Статус: On Break.",
    status: "on-break",
    category: "meeting",
    duration: "15 мин",
  },
  {
    id: generateId(),
    employeeId: teamData[3].id,
    employeeName: teamData[3].name,
    role: teamData[3].role,
    time: "12:05",
    events: "Дизайн-созвон. Статус: In Meeting.",
    status: "in-meeting",
    category: "meeting",
    duration: "20 мин",
  },
  {
    id: generateId(),
    employeeId: teamData[4].id,
    employeeName: teamData[4].name,
    role: teamData[4].role,
    time: "13:30",
    events: "Возврат к работе после обеда. Статус: Online.",
    status: "online",
    category: "task",
    duration: "25 мин",
  },
  {
    id: generateId(),
    employeeId: teamData[5].id,
    employeeName: teamData[5].name,
    role: teamData[5].role,
    time: "14:10",
    events: "Отвлечение: YouTube.",
    status: "online",
    category: "distraction",
    duration: "5 мин",
  },
];

