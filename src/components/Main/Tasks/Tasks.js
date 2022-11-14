import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../UI/Modal";
import CreateTasksForm from "./CreateTasksForm";
import { tasksList } from "../../../DummyData";

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
    console.log(taskInfo);
  };

  const deleteTaskHandler = () => {};

  return (
    <Fragment>
      <div className="mt-[6rem] w-[80%] md:w-[75%] mx-auto p-2 bg-gray-50 rounded-md shadow">
        <div
          onClick={openModalHandler}
          className="bg-blue-500 text-white inline-block p-2 rounded-md font-bold cursor-pointer"
        >
          <span className="pr-2">Add Task</span>
          <FontAwesomeIcon icon={faPlus} />
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
    </Fragment>
  );
};

export default Tasks;
