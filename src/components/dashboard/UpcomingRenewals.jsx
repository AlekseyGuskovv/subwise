import { SubscriptionItem } from "./SubscriptionItem";

export function UpcomingRenewals({ subscriptions }) {
  return (
    <div className="panel">
      <div className="panelHeader">
        <div>
          <h3>Предстоящие продления</h3>
          <p>Платежи, которые скоро наступят.</p>
        </div>

        <button className="secondaryButton">Показать все</button>
      </div>

      <div className="subscriptionList">
        {subscriptions.map(function (subscription) {
          return (
            <SubscriptionItem
              key={subscription.id}
              subscription={subscription}
            />
          );
        })}
      </div>
    </div>
  );
}
