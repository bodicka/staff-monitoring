import { statusClasses } from "@/lib/constants";
import { EmployeeCardProps } from "@/types";
import Image from "next/image";

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const {
    name,
    status,
    position,
    avatarUrl,
    lastActive,
    todayHour,
    productivitiyScore,
  } = employee;
  const statusColor = statusClasses[status] || "bg-gray-500";
  const AVATAR_SIZE = 80;

  return (
    <div className="section-box w-full p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          {/* Аватар */}
          <div className="relative h-20 w-20">
            <Image
              src={avatarUrl}
              alt={`Avatar of ${name}`}
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              quality={80}
              className="rounded-full object-cover border-4 border-white dark:border-zinc-900"
            />
            {/* Индикатор Статуса */}
            <span
              className={`absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white dark:ring-zinc-900 ${statusColor}`}
            />
          </div>
          {/* Основные Данные */}
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400">{position}</p>
            <small className="mt-1 block">
              <span className="font-medium capitalize">
                {status.replace("-", " ")}
              </span>
            </small>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100 dark:border-zinc-800 pt-4 grid grid-cols-2 gap-4">
        {/* Метрики */}
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
            Время Сегодня
          </p>
          <p className="text-xl font-semibold mt-1">{todayHour}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
            Продуктивность
          </p>
          <p className="text-xl font-semibold mt-1 text-blue-500">
            {productivitiyScore}
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-xs uppecase text-gray-500 dark:text-gray-400 font-medium">
            Последняя Активность
          </p>
          <p className="text-base font-medium mt-1">{lastActive}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
