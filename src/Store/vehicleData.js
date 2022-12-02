import { createSlice } from "@reduxjs/toolkit";

const initialVehiclesState = {
  allVehicles: [],
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: initialVehiclesState,
  reducers: {
    storeVehicles(state, action) {
      state.allVehicles = action.payload;
    },
    updateVehiclesStatus(state, action) {
      const vehicleIndex = state.allVehicles.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      state.allVehicles[vehicleIndex].status = action.payload.status;

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: state.allVehicles[vehicleIndex].id,
          status: state.allVehicles[vehicleIndex].status,
        }),
      };

      fetch("http://127.0.0.1:8080/api/tasks/vehicles", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
});

const vehiclesReducer = vehiclesSlice.reducer;

export const vehiclesAction = vehiclesSlice.actions;
export default vehiclesReducer;
