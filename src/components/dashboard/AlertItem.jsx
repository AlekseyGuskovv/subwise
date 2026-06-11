const iconClassNames = {
  danger: "dangerIcon",
  warning: "warningIcon",
  info: "infoIcon",
};

export function AlertItem({ title, description, icon, variant }) {
  const iconClassName = iconClassNames[variant] || "infoIcon";

  return (
    <div className="alertItem">
      <div className={`alertIcon ${iconClassName}`}>{icon}</div>

      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}
