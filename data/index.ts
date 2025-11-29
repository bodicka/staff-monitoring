import { EmployeeDataType, HeaderDataType } from "@/types";

export const headerData: HeaderDataType[] = [
  {
    id: 1,
    headerLink: "Home",
    href: "/home",
  },
  {
    id: 2,
    headerLink: "Dasboard",
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
