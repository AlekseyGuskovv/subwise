import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { subscriptions } from "../data/subscriptions";
import { SubscriptionsSummary } from "../components/subscriptions/SubscriptionsSummary";
import { SubscriptionTable } from "../components/subscriptions/SubscriptionTable";

export function SubscriptionsPage() {
  return (
    <>
      <Header
        title="Подписки"
        description="Управляйте всеми регулярными платежами в одном месте."
      />

      <SubscriptionsSummary subscriptions={subscriptions} />

      <section className="pageSection">
        <div className="panel">
          <div className="panelHeader">
            <div>
              <h3>Все подписки</h3>
              <p>Полный список ваших регулярных платежей.</p>
            </div>

            <Link className="primaryButton" to="/subscriptions/new">
              + Добавить подписку
            </Link>
          </div>

          <SubscriptionTable subscriptions={subscriptions} />
        </div>
      </section>
    </>
  );
}
