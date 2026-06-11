import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { DashboardPage } from "./pages/DashboardPage";
import { SubscriptionsPage } from "./pages/SubscriptionsPage";
import { AddSubscriptionPage } from "./pages/AddSubscriptionPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route
              path="/subscriptions/new"
              element={<AddSubscriptionPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
