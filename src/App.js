import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth/Auth";
import Index from "./pages/admin/Index";
import ExpenseTracker from "./pages/expense-tracker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/admin" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
