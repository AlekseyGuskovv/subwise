export function getMonthlySpend(subscriptions) {
  return subscriptions
    .filter(function (subscription) {
      return subscription.status === "active";
    })
    .reduce(function (total, subscription) {
      return total + subscription.price;
    }, 0);
}

export function getNextRenewal(subscriptions) {
  return subscriptions.reduce(function (earliest, subscription) {
    if (!earliest || subscription.renewalDate < earliest.renewalDate) {
      return subscription;
    }
    return earliest;
  }, null);
}
