import { Header } from "../components/layout/Header";
import { SubscriptionForm } from "../components/subscriptions/SubscriptionForm";

export function AddSubscriptionPage() {
  return (
    <div className="pageStack">
      <Header
        title="Добавить подписку"
        description="Создайте новый регулярный платёж и отслеживайте дату продления."
      />

      <section className="formLayout">
        <SubscriptionForm />
      </section>
    </div>
  );
}
