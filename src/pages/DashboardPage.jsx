import { Header } from "../components/layout/Header";
import { HeroSection } from "../components/dashboard/HeroSection";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { UpcomingRenewals } from "../components/dashboard/UpcomingRenewals";
import { ImportantAlerts } from "../components/dashboard/ImportantAlerts";
import { subscriptions } from "../data/subscriptions";
import { getMonthlySpend } from "../utils/subscriptionCalculations";

export function DashboardPage() {
  const monthlySpend = getMonthlySpend(subscriptions);
  const yearlyForecast = monthlySpend * 12;

  const activeSubscriptions = subscriptions.filter(function (subscription) {
    return subscription.status === "active";
  }).length;

  return (
    <>
      <Header
        title="Главная"
        description="Отслеживайте регулярные платежи и предстоящие продления."
      />

      <HeroSection monthlySpend={monthlySpend} />

      <StatsGrid
        monthlySpend={monthlySpend}
        yearlyForecast={yearlyForecast}
        activeSubscriptions={activeSubscriptions}
      />

      <section className="contentGrid">
        <UpcomingRenewals subscriptions={subscriptions} />
        <ImportantAlerts />
      </section>
    </>
  );
}
