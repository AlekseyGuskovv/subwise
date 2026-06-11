import { useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

const initialFormData = {
  name: "",
  category: "Стриминг",
  price: "",
  currency: "RUB",
  billingCycle: "monthly",
  renewalDate: "",
  status: "active",
  notes: "",
};

const billingCycleLabels = {
  monthly: "Ежемесячно",
  yearly: "Ежегодно",
  weekly: "Еженедельно",
};

const statusLabels = {
  active: "Активна",
  trial: "Пробная",
  paused: "Приостановлена",
};

export function SubscriptionForm() {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(function (currentData) {
      return {
        ...currentData,
        [name]: value,
      };
    });
  }

  function handleReset() {
    setFormData(initialFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Новая подписка:", formData);
    alert("Подписка создана. Проверьте консоль.");

    setFormData(initialFormData);
  }

  const previewName = formData.name || "Название сервиса";
  const previewPrice =
    formData.price !== ""
      ? formatCurrency(Number(formData.price), formData.currency)
      : "Цена не указана";
  const previewDate = formData.renewalDate
    ? formatDate(formData.renewalDate)
    : "Дата не выбрана";

  return (
    <>
      <form className="subscriptionForm" onSubmit={handleSubmit}>
        <div className="formGrid">
          <div className="formField full">
            <label htmlFor="name">Название сервиса</label>
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Netflix Premium"
            />
          </div>

          <div className="formField">
            <label htmlFor="category">Категория</label>
            <select
              className="select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Стриминг">Стриминг</option>
              <option value="Музыка">Музыка</option>
              <option value="Дизайн">Дизайн</option>
              <option value="ИИ-инструменты">ИИ-инструменты</option>
              <option value="Облачное хранилище">Облачное хранилище</option>
              <option value="Продуктивность">Продуктивность</option>
              <option value="Другое">Другое</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="status">Статус</label>
            <select
              className="select"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="active">Активна</option>
              <option value="trial">Пробная</option>
              <option value="paused">Приостановлена</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="price">Цена</label>
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="1699"
              min="0"
              step="1"
            />
          </div>

          <div className="formField">
            <label htmlFor="currency">Валюта</label>
            <select
              className="select"
              id="currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
            >
              <option value="RUB">RUB (₽)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="billingCycle">Период оплаты</label>
            <select
              className="select"
              id="billingCycle"
              name="billingCycle"
              value={formData.billingCycle}
              onChange={handleChange}
            >
              <option value="monthly">Ежемесячно</option>
              <option value="yearly">Ежегодно</option>
              <option value="weekly">Еженедельно</option>
            </select>
          </div>

          <div className="formField">
            <label htmlFor="renewalDate">Дата продления</label>
            <input
              className="input"
              type="date"
              id="renewalDate"
              name="renewalDate"
              value={formData.renewalDate}
              onChange={handleChange}
            />
          </div>

          <div className="formField full">
            <label htmlFor="notes">Заметки</label>
            <textarea
              className="textarea"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Семейный план, пробный период, скидка и т.д."
              rows={4}
            />
          </div>
        </div>

        <div className="formActions">
          <button className="primaryButton" type="submit">
            Создать подписку
          </button>

          <button
            className="secondaryButton"
            type="button"
            onClick={handleReset}
          >
            Сбросить
          </button>
        </div>
      </form>

      <aside className="formPreview">
        <div className="previewCard">
          <div className="previewLogo">
            {formData.name ? formData.name.slice(0, 1) : "S"}
          </div>

          <h3>{previewName}</h3>
          <p>{formData.category}</p>

          <div className="previewRows">
            <div className="previewRow">
              <span>Цена</span>
              <strong>{previewPrice}</strong>
            </div>

            <div className="previewRow">
              <span>Период оплаты</span>
              <strong>{billingCycleLabels[formData.billingCycle]}</strong>
            </div>

            <div className="previewRow">
              <span>Дата продления</span>
              <strong>{previewDate}</strong>
            </div>

            <div className="previewRow">
              <span>Статус</span>
              <strong>{statusLabels[formData.status]}</strong>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
