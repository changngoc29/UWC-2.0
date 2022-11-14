import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

function App() {
  useJsApiLoader({
    googleMapsApiKey: "AIzaSyAextcUAVctnrK7qDOcjGkpzFXr1AtOnBg",
    libraries,
  });

  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
