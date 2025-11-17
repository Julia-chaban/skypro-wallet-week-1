import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SpendAnalysisPage from "./pages/SpendAnalysisPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import NewSpendPage from "./pages/NewSpendPage";
import EditSpendPage from "./pages/EditSpendPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="spend/new" element={<NewSpendPage />} />
        <Route path="spend/:id" element={<EditSpendPage />} />
      </Route>
      <Route path="/spend-analysis" element={<SpendAnalysisPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
