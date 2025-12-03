import EmployeeCard from "@/components/ui/EmployeeCard";
import MetricsSummary from "@/components/ui/MetricsSummary";
import { latestEvents, testEmployeeData } from "@/data";

export default function Home() {
  return (
    <div className="app-container py-8 lg:py-12">
      <h1 className="mb-8">Главный Обзор 🚀</h1>
      {/* Основная Сетка Контента (Две Колонки) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Левая Колонка (Основной Контент) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Карточка Мониторируемого Сотрудника */}
          <section>
            <h2>Мониторируемый Сотрудник</h2>
            <p className="text-sm opacity-70 mb-4">
              Данные сотрудника в фокусе мониторинга.
            </p>
            <EmployeeCard employee={testEmployeeData} />
          </section>
          <section>
            {/* Дополнительный Контент: Последние События */}
            <h3>Последние События</h3>
            <div className="section-box space-y-3">
              {latestEvents.map((event, idx) => (
                <p
                  key={idx}
                  className="text-base text-gray-500 dark:text-gray-400 "
                >
                  {event.time} - {event.events}
                </p>
              ))}
            </div>
            <button className="btn-primary mt-4">Посмотреть Все События</button>
          </section>
        </div>
        {/* Правая Колонка (Сводка Метрик) */}
        <MetricsSummary />
      </div>
    </div>
  );
}
