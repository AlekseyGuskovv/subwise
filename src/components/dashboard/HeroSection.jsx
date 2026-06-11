import { subscriptions } from "../../data/subscriptions";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { getNextRenewal } from "../../utils/subscriptionCalculations";

export function HeroSection({ monthlySpend }) {
  const nextRenewal = getNextRenewal(subscriptions);

  return (
    <section className="hero">
      <div>
        <span className="eyebrow">Обзор за месяц</span>

        <h1>
          Вы тратите {formatCurrency(monthlySpend, "RUB")} в месяц на подписки.
        </h1>

        <p>
          Subwise помогает отслеживать регулярные платежи, предстоящие
          продления и сервисы, которые могут дублировать друг друга.
        </p>
      </div>

      <div className="heroSummary">
        <div>
          <span>Ближайшее продление</span>
          <strong>
            {nextRenewal.name} · {formatDate(nextRenewal.renewalDate)}
          </strong>
        </div>
      </div>
    </section>
  );
}
