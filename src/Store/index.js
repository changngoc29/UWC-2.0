import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersData";
import MCPsReducer from "./mcpsData";
import vehiclesReducer from "./vehicleData";
import tasksReducer from "./tasksList";

const store = configureStore({
  reducer: {
    users: usersReducer,
    mcps: MCPsReducer,
    vehicles: vehiclesReducer,
    tasks: tasksReducer,
  },
});

export default store;
