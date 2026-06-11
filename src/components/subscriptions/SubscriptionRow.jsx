import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

const statusLabels = {
  active: "Активна",
  trial: "Пробная",
  paused: "Приостановлена",
};

export function SubscriptionRow({ subscription }) {
  return (
    <div className="subscriptionRow">
      <div className="subscriptionLogo">
        {subscription.name.slice(0, 1)}
      </div>

      <div className="subscriptionRowName">
        <strong>{subscription.name}</strong>
        <span>{subscription.category}</span>
      </div>

      <div className="subscriptionRowPrice">
        <strong>
          {formatCurrency(subscription.price, subscription.currency)}
        </strong>
      </div>

      <div className="subscriptionRowDate">
        {formatDate(subscription.renewalDate)}
      </div>

      <div>
        <span className={`statusBadge ${subscription.status}`}>
          {statusLabels[subscription.status] || subscription.status}
        </span>
      </div>

      <div>
        <button className="secondaryButton" type="button">
          Изменить
        </button>
      </div>
    </div>
  );
}
