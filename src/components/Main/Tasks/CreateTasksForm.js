import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTruck,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const CreateTasksForm = (props) => {
  const [taskFormRole, setTaskFormRol] = useState("collector");

  const submitTaskFormHandler = (e) => {
    console.log("success");
    e.preventDefault();

    let taskInfo = {
      MCP: {
        MCPLocation: MCPsLocationInputRef.current.value,
      },
      employee: {
        fullName: employeeFullNameInputRef.current.value,
        ID: employeeIDInputRef.current.value,
        role: taskFormRole,
      },
      id: Math.random(),
    };

    if (taskFormRole === "collector") {
      taskInfo = {
        MCP: {
          MCPLocation: MCPsLocationInputRef.current.value,
        },
        employee: {
          fullName: employeeFullNameInputRef.current.value,
          ID: employeeIDInputRef.current.value,
          role: taskFormRole,
        },
        vehicle: {
          name: vehiclesNameInputRef.current.value,
          licensePalate: licensePlateInputRef.current.value,
        },
        id: Math.random(),
      };
    }

    props.onCreateTask(taskInfo);

    props.onCloseModal();
  };

  const MCPsLocationInputRef = useRef();
  const employeeFullNameInputRef = useRef();
  const employeeIDInputRef = useRef();
  const vehiclesNameInputRef = useRef();
  const licensePlateInputRef = useRef();

  return (
    <form onSubmit={submitTaskFormHandler}>
      <h1 className="font-sans text-center text-[1.5rem] font-bold text-[#fe8a7d]">
        {taskFormRole.toUpperCase()} TASK FORM
      </h1>
      <p className="text-[0.75rem] text-gray-500 text-center">
        Create task for{" "}
        <span
          onClick={() => setTaskFormRol("janitor")}
          className="font-bold text-black hover:underline cursor-pointer underline-offset-2"
        >
          JANITOR
        </span>{" "}
        or{" "}
        <span
          onClick={() => setTaskFormRol("collector")}
          className="font-bold text-black hover:underline cursor-pointer underline-offset-2"
        >
          COLLECTOR
        </span>
      </p>
      <div className="mb-3">
        <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
          <FontAwesomeIcon className="pr-2" icon={faMapLocation} />
          MCPs
        </h2>
        <input
          required
          ref={MCPsLocationInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="MCP location"
        />
      </div>
      <div className="mb-3">
        <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
          <FontAwesomeIcon className="pr-2" icon={faUsers} />
          Employee
        </h2>
        <input
          required
          ref={employeeFullNameInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="Full Name"
        />
        <input
          required
          ref={employeeIDInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="Employee ID"
        />
      </div>
      {taskFormRole === "collector" && (
        <div className="mb-3">
          <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
            <FontAwesomeIcon className="pr-2" icon={faTruck} />
            Vehicle
          </h2>
          <input
            required
            ref={vehiclesNameInputRef}
            className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            placeholder="Vehicle Name"
          />
          <input
            required
            ref={licensePlateInputRef}
            className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
            placeholder="License Plate"
          />
        </div>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className="p-2 bg-[#263544] text-white font-medium rounded-md shadow"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CreateTasksForm;
