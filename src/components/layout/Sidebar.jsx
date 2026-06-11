import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo">
          <div className="logoIcon">S</div>

          <div>
            <h1>Subwise</h1>
            <p>Трекер подписок с ИИ</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink
            to="/dashboard"
            className={function (props) {
              return props.isActive ? "navItem active" : "navItem";
            }}
          >
            Главная
          </NavLink>

          <NavLink
            to="/subscriptions"
            className={function (props) {
              return props.isActive ? "navItem active" : "navItem";
            }}
          >
            Подписки
          </NavLink>

          <span className="navItem">Календарь</span>
          <span className="navItem">ИИ-ассистент</span>
          <span className="navItem">Аналитика</span>
          <span className="navItem">Настройки</span>
        </nav>
      </div>
    </aside>
  );
}
