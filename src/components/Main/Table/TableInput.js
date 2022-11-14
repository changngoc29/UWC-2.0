import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TableInput = (props) => {
  const { category } = props;
  return (
    <div className="bg-white mx-auto mb-3 w-[90%] lg:w-[85%] justify-between flex flex-wrap gap-2">
      <div className="rounded-md shadow w-full md:w-[40%] flex items-center justify-evenly">
        <FontAwesomeIcon
          className="text-slate-400 text-[1.2rem] px-2"
          icon={faSearch}
        />
        <input
          className="focus:outline-none flex-1 md:flex-none md:w-[45%]"
          placeholder={`${
            category === "employee"
              ? "Search for employee"
              : category === "vehicles"
              ? "Search for vehicles"
              : ""
          }`}
        />
        <button className="bg-blue-500 text-white p-1 m-1 rounded-md w-[30%] overflow-hidden whitespace-nowrap">
          Search
        </button>
      </div>
      {category === "employee" && (
        <div className="flex gap-2 w-full md:w-[20%]">
          <select
            onChange={props.onChangeDropDown}
            id="roles"
            className="bg-[#263544] text-white rounded-md shadow block w-full py-2 px-3"
          >
            <option value="all">All</option>
            <option value="janitor">Janitor</option>
            <option value="collector">Collector</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default TableInput;
