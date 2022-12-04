import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import { useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { getAllUsers } from "./Store/usersData";
import { getAllMCPs } from "./Store/mcpsData";
import { getAllVehicles } from "./Store/vehicleData";
import { getAllTasks } from "./Store/tasksList";
import EmployeePage from "./pages/EmployeePage";

const libraries = ["places"];

function App() {
  const dispatch = useDispatch();

  useJsApiLoader({
    googleMapsApiKey: "AIzaSyAextcUAVctnrK7qDOcjGkpzFXr1AtOnBg",
    libraries,
  });

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllVehicles());
    dispatch(getAllMCPs());
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="login" />} />
      <Route path="login" element={<AuthPage />} />
      <Route path="backofficer" element={<AdminPage />} />
      <Route path="employee" element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
