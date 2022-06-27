import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MySitesPage from "./pages/MySitesPage";
import SupportPage from "./pages/SupportPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sites" element={<MySitesPage />} />
        <Route path="/support" element={<SupportPage />} />
        {/* <Route path="/detail:workOrderId" element={<WorkOrderDetailPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
