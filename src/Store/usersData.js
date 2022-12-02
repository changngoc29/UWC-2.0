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

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: state.allUsers[userIndex].id,
          status: state.allUsers[userIndex].status,
        }),
      };

      fetch("http://127.0.0.1:8080/api/v1/users", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
});

const usersReducer = usersSlice.reducer;

export const usersAction = usersSlice.actions;
export default usersReducer;
