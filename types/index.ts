import { JSX } from "react";

export type HeaderDataType = {
  id: number;
  headerLink: string;
  href: string;
};

export type EmployeeDataType = {
  id: number;
  name: string;
  position: string;
  status: "online" | "offline" | "on-break" | "in-meeting";
  avatarUrl: string;
  lastActive: string;
  todayHour: string;
  productivitiyScore: number;
};

export interface EmployeeCardProps {
  employee: EmployeeDataType;
}

export interface MetrickBoxProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export type LatestEventsTypes = {
  id: number;
  time: string;
  events: string;
};

export type QuickMetrickTypes = {
  id: number;
  title: string;
  value: string;
  icon: JSX.Element;
  color: string;
}

export type ActionsReportsType = {
  id: number;
  href: string;
  className: string;
  description: string;
};

