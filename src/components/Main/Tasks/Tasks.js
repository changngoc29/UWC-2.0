import React, { Fragment, useState } from "react";
import Modal from "../../UI/Modal";
import TaskItem from "./TaskItem";
import CreateTasksForm from "./CreateTasksForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../../UI/SearchInput";

const Tasks = () => {
  const [createTask, setCreateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const closeModalHandler = () => {
    setCreateTask(false);
  };

  const openModalHandler = () => {
    setCreateTask(true);
  };

  const createTaskHandler = (taskInfo) => {
    const newTasks = [taskInfo, ...tasks];
    setTasks(newTasks);
  };

  const deleteTaskHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <div className="mt-[6rem] w-[80%] md:w-[65%] mx-auto p-2 flex justify-between shadow flex-wrap gap-2">
        <SearchInput category="tasks" />
        <div
          onClick={openModalHandler}
          className="w-full md:w-fit text-slate-500 inline-block p-1.5 cursor-pointer border-2 border-slate-400 shadow line-clamp-1"
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
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return (
            <TaskItem
              key={index}
              task={task}
              onDeleteTask={deleteTaskHandler.bind(null, task.id)}
            />
          );
        })}
      {tasks.length === 0 && (
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
