import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  allUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    storeUsers(state, action) {
      state.allUsers = action.payload;
    },
    updateUserStatus(state, action) {
      const userIndex = state.allUsers.findIndex(
        (user) => user.id === action.payload.id
      );
      state.allUsers[userIndex].status = action.payload.status;
    },
  },
});

const usersReducer = usersSlice.reducer;

export const usersAction = usersSlice.actions;
export default usersReducer;
