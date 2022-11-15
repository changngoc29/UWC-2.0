import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../UI/Modal";
import CreateTasksForm from "./CreateTasksForm";
import { tasksList } from "../../../DummyData";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [createTask, setCreateTask] = useState(false);
  const [tasks, setTasks] = useState(tasksList);

  const closeModalHandler = () => {
    setCreateTask(false);
  };

  const openModalHandler = () => {
    setCreateTask(true);
  };

  const createTaskHandler = (taskInfo) => {
    tasksList.push(taskInfo);
    setTasks([...tasksList]);
  };

  const deleteTaskHandler = () => {};

  return (
    <Fragment>
      <div className="mt-[6rem] w-[80%] md:w-[65%] mx-auto p-2 rounded-md shadow">
        <div
          onClick={openModalHandler}
          className="text-slate-500 inline-block p-1.5 rounded-md cursor-pointer border-2 border-slate-300"
        >
          <FontAwesomeIcon className="text-[0.75rem]" icon={faPlus} />
          <span className="pl-2">Add Task</span>
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
          return <TaskItem key={index} task={task} />;
        })}
    </Fragment>
  );
};

export default Tasks;
