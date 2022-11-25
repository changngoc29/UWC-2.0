import { createSlice } from "@reduxjs/toolkit";

const initialTasksState = {
  allTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    addTasks(state, action) {
      state.allTasks = [action.payload, ...state.allTasks];
    },
    deleteTask(state, action) {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

const tasksReducer = tasksSlice.reducer;

export const tasksAction = tasksSlice.actions;
export default tasksReducer;
