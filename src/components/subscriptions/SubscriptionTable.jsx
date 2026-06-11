import { SubscriptionRow } from "./SubscriptionRow";

export function SubscriptionTable({ subscriptions }) {
  return (
    <div className="subscriptionsTable">
      {subscriptions.map(function (subscription) {
        return (
          <SubscriptionRow
            key={subscription.id}
            subscription={subscription}
          />
        );
      })}
    </div>
  );
}
