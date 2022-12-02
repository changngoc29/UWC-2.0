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

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload),
      };

      fetch("http://127.0.0.1:8080/api/tasks", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    deleteTask(state, action) {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );

      const deleteTaskIndex = state.allTasks.findIndex(
        (task) => task.id === action.payload
      );

      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: state.allTasks[deleteTaskIndex].id,
        }),
      };

      fetch("http://127.0.0.1:8080/api/tasks", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
});

const tasksReducer = tasksSlice.reducer;

export const tasksAction = tasksSlice.actions;
export default tasksReducer;
