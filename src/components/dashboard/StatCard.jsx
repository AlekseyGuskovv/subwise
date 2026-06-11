export function StatCard({ label, value, hint, variant }) {
  const hintClassName =
    variant && variant !== "default" ? variant : undefined;

  return (
    <div className="statCard">
      <span>{label}</span>
      <strong>{value}</strong>
      {hint ? <small className={hintClassName}>{hint}</small> : null}
    </div>
  );
}
