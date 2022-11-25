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
    },
  },
});

const MCPsReducer = MCPsSlice.reducer;

export const MCPssAction = MCPsSlice.actions;
export default MCPsReducer;
