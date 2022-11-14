import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MCPsCard from "./MCPsCard";
import { MCPsData } from "../../../DummyData";

const MCPs = () => {
  const emptyMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "empty";
  });
  const fullMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "full";
  });
  const progressMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "in progress";
  });

  return (
    <div className="mt-[6rem] w-[90%] md:w-[85%] mx-auto">
      <div className="w-full md:w-[40%] flex items-center justify-evenly mb-3 rounded-md shadow">
        <FontAwesomeIcon
          className="text-slate-400 text-[1.2rem] px-2"
          icon={faSearch}
        />
        <input
          className="focus:outline-none flex-1 md:flex-none md:w-[45%]"
          placeholder="Search for MCPs"
        />
        <button className="bg-blue-500 text-white p-1 m-1 rounded-md w-[30%] overflow-hidden whitespace-nowrap">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 rounded-md shadow">
        <div className="m-2">
          <h1 className="p-2 tracking-wider mb-2 font-bold border-t-2 border-orange-500 text-orange-500">
            Empty <span className="text-gray-400">{`(2)`}</span>
          </h1>
          {emptyMCPs.map((MCP, index) => {
            return <MCPsCard key={index} data={MCP} />;
          })}
        </div>
        <div className="m-2">
          <h1 className="p-2 tracking-wider mb-2 font-bold border-t-2 border-purple-500 text-purple-500">
            Full <span className="text-gray-400">{`(3)`}</span>
          </h1>
          {fullMCPs.map((MCP, index) => {
            return <MCPsCard key={index} data={MCP} />;
          })}
        </div>
        <div className="m-2">
          <h1 className="p-2 tracking-wider mb-2 font-bold border-t-2 border-green-500 text-green-500">
            In Progress <span className="text-gray-400">{`(4)`}</span>
          </h1>
          {progressMCPs.map((MCP, index) => {
            return <MCPsCard key={index} data={MCP} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MCPs;
