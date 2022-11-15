import React from "react";
import Modal from "../../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faEdit } from "@fortawesome/free-regular-svg-icons";

const TaskItem = (props) => {
  const { task } = props;
  const { MCP, employee, vehicle } = task;

  return (
    <div className="w-[80%] md:w-[65%] mx-auto mt-3 p-3 shadow border-l-[4px] border-red-800">
      <div className="flex justify-between">
        <p className="flex items-end">Role: {employee.role}</p>
        <p className="tracking-wider text-[0.75rem] font-sans p-1.5 rounded-lg font-bold text-red-800 bg-red-200 bg-opacity-50">
          Not Check In
        </p>
      </div>
      <p className="text-gray-500 text-sm my-2 line-clamp-1">{`MCP Location: ${MCP.MCPLocation}, Employee Name: ${employee.fullName}, Vehicle: ${vehicle.name}`}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <p className="flex items-center">
          View More
          <FontAwesomeIcon
            className="pl-2 cursor-pointer"
            icon={faArrowRight}
          />
        </p>
        <div>
          <FontAwesomeIcon className="cursor-pointer pr-2" icon={faEdit} />
          <FontAwesomeIcon className="cursor-pointer" icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
