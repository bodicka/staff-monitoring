import { MetrickBoxProps } from "@/types";

const MetricBox = ({ title, value, icon, color }: MetrickBoxProps) => {
  return (
    <div className="section-box p-4">
      <div className={`text-white p-2 rounded-lg inline-block mb-3 ${color}`}>
        {icon}
      </div>
      <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
        {title}
      </p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default MetricBox;
