import React, { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import TaskItem from "./TaskItem";
import CreateTasksForm from "./CreateTasksForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { usersAction } from "../../../Store/usersData";
import { MCPssAction } from "../../../Store/mcpsData";
import { vehiclesAction } from "../../../Store/vehicleData";
import { tasksAction } from "../../../Store/tasksList";

const Tasks = () => {
  const [createTask, setCreateTask] = useState(false);
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.tasks.allTasks);
  console.log(allTasks);

  const closeModalHandler = () => {
    setCreateTask(false);
  };

  const openModalHandler = () => {
    setCreateTask(true);
  };

  const createTaskHandler = (taskInfo) => {
    dispatch(tasksAction.addTasks(taskInfo));
  };

  const deleteTaskHandler = (deleteTask) => {
    dispatch(tasksAction.deleteTask(deleteTask.id));

    dispatch(
      usersAction.updateUserStatus({
        id: deleteTask.employee.ID,
        status: "Available",
      })
    );

    if (deleteTask.employee.role === "janitor") {
      dispatch(
        MCPssAction.updateMCPsStatus({ id: deleteTask.MCP.ID, status: "empty" })
      );
    } else if (deleteTask.employee.role === "collector") {
      dispatch(
        MCPssAction.updateMCPsStatus({ id: deleteTask.MCP.ID, status: "full" })
      );
      dispatch(
        vehiclesAction.updateVehiclesStatus({
          id: deleteTask.vehicle.ID,
          status: "available",
        })
      );
    }
  };

  return (
    <Fragment>
      <div className="mt-[6rem] w-[80%] md:w-[65%] mx-auto p-2 flex justify-between shadow flex-wrap gap-2">
        <div
          onClick={openModalHandler}
          className="w-full md:w-fit text-[#263544] inline-block p-1.5 cursor-pointer border-2 border-[#263544] shadow line-clamp-1"
        >
          Add Task
        </div>
      </div>
      {createTask && (
        <Modal onCloseModal={closeModalHandler}>
          <CreateTasksForm
            onCloseModal={closeModalHandler}
            onCreateTask={createTaskHandler}
          />
        </Modal>
      )}
      {allTasks.length > 0 &&
        allTasks.map((task, index) => {
          return (
            <TaskItem
              key={index}
              task={task}
              onDeleteTask={deleteTaskHandler.bind(null, task)}
            />
          );
        })}
      {allTasks.length === 0 && (
        <div className="text-center mt-20">
          <FontAwesomeIcon
            className="text-slate-400 text-[15rem]"
            icon={faClipboardCheck}
          />
          <p className="font-bold text-[1.5rem] mt-3">NO TASK FOUND</p>
          <p className="text-gray-500">There are no tasks to display...</p>
        </div>
      )}
    </Fragment>
  );
};

export default Tasks;
