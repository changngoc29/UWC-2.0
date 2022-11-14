import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MCPsCard = (props) => {
  const { data } = props;

  return (
    <div className="bg-white shadow rounded-md items-center gap-2 mb-2">
      <img className="w-full h-[11rem] rounded-md" src={data.img} alt="MCP" />
      <div className="p-4">
        <h2 className="line-clamp-1 text-left">
          <span className="font-bold">Location:</span> {data.location}
        </h2>
        <p className="line-clamp-2 text-left overflow-hidden h-[48px]">
          <span className="font-bold">Address:</span> {data.address}
        </p>
        <div className="flex justify-end gap-2 items-center text-sm text-gray-500 cursor-pointer">
          <span>More Info</span>
          <FontAwesomeIcon icon={faArrowRight} className="pr-2" />
        </div>
      </div>
    </div>
  );
};

export default MCPsCard;
