import { styleLiActionsReports } from "@/constants";
import {
  ActionsReportsType,
  EmployeeDataType,
  HeaderDataType,
  LatestEventsTypes,
} from "@/types";

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

export const testEmployeeData: EmployeeDataType = {
  id: 101,
  name: "Алексей Смирнов",
  position: "Senior Frontend Developer",
  status: "online",
  avatarUrl:
    "https://img.freepik.com/premium-psd/3d-render-avatar-character_23-2150611783.jpg?semt=ais_items_boosted&w=740",
  lastActive: "Сейчас (20:30)",
  todayHour: "7ч 45м",
  productivitiyScore: 88,
};

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
