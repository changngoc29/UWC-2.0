import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTruck,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const CreateTasksForm = (props) => {
  const submitTaskFormHandler = (e) => {
    console.log("success");
    e.preventDefault();
    props.onCreateTask({
      MCP: {
        MCPLocation: MCPsLocationInputRef.current.value,
      },
      employee: {
        fullName: employeeFullNameInputRef.current.value,
        ID: employeeIDInputRef.current.value,
        role: employeeRoleInputRef.current.value,
      },
      vehicle: {
        name: vehiclesNameInputRef.current.value,
        licensePalate: licensePlateInputRef.current.value,
      },
    });

    props.onCloseModal();
  };

  const MCPsLocationInputRef = useRef();
  const employeeFullNameInputRef = useRef();
  const employeeIDInputRef = useRef();
  const employeeRoleInputRef = useRef();
  const vehiclesNameInputRef = useRef();
  const licensePlateInputRef = useRef();

  return (
    <form onSubmit={submitTaskFormHandler}>
      <h1 className="font-sans text-center text-[1.5rem] font-bold text-[#fe8a7d]">
        CREATE TASK FORM
      </h1>
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
        <input
          required
          ref={employeeRoleInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="Role"
        />
      </div>
      <div className="mb-3">
        <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
          <FontAwesomeIcon className="pr-2" icon={faTruck} />
          Vehicles
        </h2>
        <input
          required
          ref={vehiclesNameInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="Vehicles Name"
        />
        <input
          required
          ref={licensePlateInputRef}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          placeholder="License Plate"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white font-bold rounded-md shadow"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CreateTasksForm;
