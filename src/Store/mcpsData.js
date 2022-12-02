import { createSlice } from "@reduxjs/toolkit";

const initialMCPsState = {
  allMCPs: [],
};

const MCPsSlice = createSlice({
  name: "MCPs",
  initialState: initialMCPsState,
  reducers: {
    storeMCPs(state, action) {
      state.allMCPs = action.payload;
    },
    updateMCPsStatus(state, action) {
      const MCPIndex = state.allMCPs.findIndex(
        (mcp) => mcp.id === action.payload.id
      );
      state.allMCPs[MCPIndex].status = action.payload.status;

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: state.allMCPs[MCPIndex].id,
          status: state.allMCPs[MCPIndex].status,
        }),
      };

      fetch("http://127.0.0.1:8080/api/tasks/mcps", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
});

const MCPsReducer = MCPsSlice.reducer;

export const MCPssAction = MCPsSlice.actions;
export default MCPsReducer;
