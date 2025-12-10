import { MetrickBoxProps, QuickMetrickTypes } from "@/types";
import {
  AlertTriangle,
  BarChart2,
  Clock,
  LucideIcon,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

const IconMap: Record<QuickMetrickTypes["iconName"], LucideIcon> = {
  Zap: Zap,
  BarChart2: BarChart2,
  Clock: Clock,
  Users: User,
  TrendingUp: TrendingUp,
  AlertTriangle: AlertTriangle,
};

const MetricBox = ({ title, value, iconName, color }: MetrickBoxProps) => {
  const IconComponent = IconMap[iconName];
  return (
    <div className="section-box p-4">
      <div className={`text-white p-2 rounded-lg inline-block mb-3 ${color}`}>
        <IconComponent className="w-5 h-5" />
      </div>
      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
        {title}
      </p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default MetricBox;
