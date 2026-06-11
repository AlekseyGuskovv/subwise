import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export function SubscriptionItem({ subscription }) {
  return (
    <div className="subscriptionItem">
      <div className="subscriptionLogo">
        {subscription.name.slice(0, 1)}
      </div>

      <div>
        <strong>{subscription.name}</strong>
        <span>{subscription.category}</span>
      </div>

      <div className="subscriptionPrice">
        <strong>
          {formatCurrency(subscription.price, subscription.currency)}
        </strong>
        <span>{formatDate(subscription.renewalDate)}</span>
      </div>
    </div>
  );
}
