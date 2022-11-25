import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import { useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { usersAction } from "./Store/usersData";
import { MCPssAction } from "./Store/mcpsData";
import { vehiclesAction } from "./Store/vehicleData";
import EmployeePage from "./pages/EmployeePage";

const libraries = ["places"];

function App() {
  const dispatch = useDispatch();

  useJsApiLoader({
    googleMapsApiKey: "AIzaSyAextcUAVctnrK7qDOcjGkpzFXr1AtOnBg",
    libraries,
  });

  fetch("http://127.0.0.1:8080/api/v1/users")
    .then((response) => response.json())
    .then((users) => {
      const allUsers = users.data.results;
      dispatch(usersAction.storeUsers(allUsers));
    });

  fetch("http://127.0.0.1:8080/api/v1/tasks/vehicles")
    .then((response) => response.json())
    .then((vehicles) => {
      const allVehicles = vehicles.data;
      dispatch(vehiclesAction.storeVehicles(allVehicles));
    });

  fetch("http://127.0.0.1:8080/api/v1/tasks/mcps")
    .then((response) => response.json())
    .then((mcps) => {
      const allMCPs = mcps.data;
      dispatch(MCPssAction.storeMCPs(allMCPs));
    });

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
