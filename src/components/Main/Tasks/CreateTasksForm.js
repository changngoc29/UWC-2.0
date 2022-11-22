import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faTruck,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { employeeData, MCPsData, vehiclesData } from "../../../DummyData";

const availableVehicles = vehiclesData.filter((vehicle) => {
  return vehicle.status === "available";
});

const MCPsFull = MCPsData.filter((MCP) => {
  return MCP.status === "full";
});

const MCPsEmpty = MCPsData.filter((MCP) => {
  return MCP.status === "empty";
});

const availableJanitor = employeeData.filter((employee) => {
  return employee.status === "available" && employee.role === "janitor";
});

const availableCollector = employeeData.filter((employee) => {
  return employee.status === "available" && employee.role === "collector";
});

const CreateTasksForm = (props) => {
  const [taskFormRole, setTaskFormRol] = useState("collector");
  const [MCPsOptionValue, setMCPsOptionValue] = useState(null);
  const [employeeOptionValue, setemployeeOptionValue] = useState(null);
  const [vehicleOption, setVehicleOption] = useState(null);

  const submitTaskFormHandler = (e) => {
    e.preventDefault();
    if (!MCPsOptionValue && !employeeOptionValue && !vehicleOption) return;

    let taskInfo = {
      MCP: {
        MCPLocation:
          taskFormRole === "collector"
            ? MCPsFull[MCPsOptionValue].location
            : MCPsEmpty[MCPsOptionValue].location,
      },
      employee: {
        role: taskFormRole,
        fullName:
          taskFormRole === "collector"
            ? availableCollector[employeeOptionValue].name
            : availableJanitor[employeeOptionValue].name,
        ID:
          taskFormRole === "collector"
            ? availableCollector[employeeOptionValue].id
            : availableJanitor[employeeOptionValue].id,
      },
      vehicle: {
        name: availableVehicles[vehicleOption]?.name,
        licensePalate: availableVehicles[vehicleOption]?.id,
      },
      id: Math.random(),
    };

    props.onCreateTask(taskInfo);

    props.onCloseModal();
  };

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
        <select
          defaultValue={`Select ${
            taskFormRole === "collector" ? "full" : "empty"
          } MCPs`}
          required
          onChange={(e) => {
            setMCPsOptionValue(e.currentTarget.value);
          }}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
        >
          <option disabled className="bg-slate-400 text-white">
            Select {taskFormRole === "collector" ? "full" : "empty"} MCPs
          </option>
          {taskFormRole === "collector" &&
            MCPsFull.map((MCP, index) => {
              return (
                <option value={index} key={index}>
                  {MCP.location}
                </option>
              );
            })}
          {taskFormRole === "janitor" &&
            MCPsEmpty.map((MCP, index) => {
              return (
                <option value={index} key={index}>
                  {MCP.location}
                </option>
              );
            })}
        </select>
      </div>
      <div className="mb-3">
        <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
          <FontAwesomeIcon className="pr-2" icon={faUsers} />
          {taskFormRole.toUpperCase()}
        </h2>
        <select
          defaultValue={`Select available ${taskFormRole}`}
          required
          onChange={(e) => {
            setemployeeOptionValue(e.currentTarget.value);
          }}
          className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
        >
          <option disabled className="bg-slate-400 text-white">
            Select available {taskFormRole}
          </option>
          {taskFormRole === "collector" &&
            availableCollector.map((employee, index) => {
              return (
                <option
                  value={index}
                  key={index}
                >{`${employee.name}, ${employee.id}`}</option>
              );
            })}
          {taskFormRole === "janitor" &&
            availableJanitor.map((employee, index) => {
              return (
                <option
                  value={index}
                  key={index}
                >{`${employee.name}, ${employee.id}`}</option>
              );
            })}
        </select>
      </div>
      {taskFormRole === "collector" && (
        <div className="mb-3">
          <h2 className="font-bold text-gray-700 border-b-2 border-b-slate-400 py-2">
            <FontAwesomeIcon className="pr-2" icon={faTruck} />
            VEHICLE
          </h2>
          <select
            defaultValue="Select available vehicle"
            required
            onChange={(e) => {
              setVehicleOption(e.currentTarget.value);
            }}
            className="p-2 w-full shadow rounded-md mt-2 focus:outline-blue-400"
          >
            <option disabled className="bg-slate-400 text-white">
              Select available vehicle
            </option>
            {availableVehicles.map((vehicle, index) => {
              return (
                <option
                  value={index}
                  key={index}
                >{`${vehicle.name}, ${vehicle.id}`}</option>
              );
            })}
          </select>
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
