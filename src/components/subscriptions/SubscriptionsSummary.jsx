export function SubscriptionsSummary({ subscriptions }) {
  const total = subscriptions.length;
  const active = subscriptions.filter(function (subscription) {
    return subscription.status === "active";
  }).length;
  const trials = subscriptions.filter(function (subscription) {
    return subscription.status === "trial";
  }).length;
  const paused = subscriptions.filter(function (subscription) {
    return subscription.status === "paused";
  }).length;

  return (
    <section className="statsGrid pageSection">
      <div className="statCard">
        <span>Всего</span>
        <strong>{total}</strong>
      </div>

      <div className="statCard">
        <span>Активные</span>
        <strong>{active}</strong>
      </div>

      <div className="statCard">
        <span>Пробные</span>
        <strong>{trials}</strong>
      </div>

      <div className="statCard">
        <span>Приостановленные</span>
        <strong>{paused}</strong>
      </div>
    </section>
  );
}
