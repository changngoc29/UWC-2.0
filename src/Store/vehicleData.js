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
    },
  },
});

const vehiclesReducer = vehiclesSlice.reducer;

export const vehiclesAction = vehiclesSlice.actions;
export default vehiclesReducer;
