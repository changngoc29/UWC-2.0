import React, { Fragment } from "react";
import MCPsCard from "./MCPsCard";
import { MCPsData } from "../../../DummyData";
import SearchInput from "../../UI/SearchInput";

const MCPs = () => {
  const emptyMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "empty";
  });
  const fullMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "full";
  });
  const progressMCPs = MCPsData.filter((MCP) => {
    return MCP.status === "progress";
  });

  return (
    <Fragment>
      <div className="mt-[6rem] w-[90%] md:w-[85%] mx-auto p-2 shadow flex">
        <SearchInput category="MCPs" />
      </div>
      <div className="mt-[1rem] w-[90%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-50 rounded-md shadow">
          <div className="m-2">
            <h1 className="p-2 tracking-wider mb-2 font-bold text-lg border-t-2 border-blue-500 text-blue-500">
              Empty <span className="text-gray-400">{`(2)`}</span>
            </h1>
            {emptyMCPs.map((MCP, index) => {
              return <MCPsCard key={index} data={MCP} />;
            })}
          </div>
          <div className="m-2">
            <h1 className="p-2 tracking-wider mb-2 font-bold text-lg border-t-2 border-yellow-500 text-yellow-500">
              Full <span className="text-gray-400">{`(3)`}</span>
            </h1>
            {fullMCPs.map((MCP, index) => {
              return <MCPsCard key={index} data={MCP} />;
            })}
          </div>
          <div className="m-2">
            <h1 className="p-2 tracking-wider mb-2 font-bold text-lg border-t-2 border-green-500 text-green-500">
              In Progress <span className="text-gray-400">{`(4)`}</span>
            </h1>
            {progressMCPs.map((MCP, index) => {
              return <MCPsCard key={index} data={MCP} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MCPs;
