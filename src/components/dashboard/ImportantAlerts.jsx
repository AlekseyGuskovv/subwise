import { AlertItem } from "./AlertItem";

const alerts = [
  {
    id: 1,
    title: "Скоро продлится Netflix",
    description:
      "Ваша самая дорогая подписка на стриминг скоро продлится.",
    icon: "!",
    variant: "danger",
  },
  {
    id: 2,
    title: "Spotify может дублироваться",
    description: "YouTube Premium включает YouTube Music.",
    icon: "↔",
    variant: "warning",
  },
];

export function ImportantAlerts() {
  return (
    <div className="panel">
      <div className="panelHeader">
        <div>
          <h3>Важные уведомления</h3>
          <p>То, что требует внимания.</p>
        </div>
      </div>

      <div className="alertList">
        {alerts.map(function (alert) {
          return (
            <AlertItem
              key={alert.id}
              title={alert.title}
              description={alert.description}
              icon={alert.icon}
              variant={alert.variant}
            />
          );
        })}
      </div>
    </div>
  );
}
