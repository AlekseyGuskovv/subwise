import { formatCurrency } from "../../utils/formatCurrency";
import { StatCard } from "./StatCard";

export function StatsGrid({
  monthlySpend,
  yearlyForecast,
  activeSubscriptions,
  potentialSavings,
}) {
  return (
    <section className="statsGrid">
      <StatCard
        label="Расходы за месяц"
        value={formatCurrency(monthlySpend, "RUB")}
      />

      <StatCard
        label="Прогноз на год"
        value={formatCurrency(yearlyForecast, "RUB")}
      />

      <StatCard label="Активные подписки" value={activeSubscriptions} />

      {potentialSavings ? (
        <StatCard
          label="Возможная экономия"
          value={potentialSavings}
          hint="Оценка ИИ"
          variant="warning"
        />
      ) : null}
    </section>
  );
}
