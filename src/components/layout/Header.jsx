export function Header({ title, description }) {
  return (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <button className="primaryButton">+ Добавить подписку</button>
    </header>
  );
}
