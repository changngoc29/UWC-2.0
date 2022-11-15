import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TableInput = (props) => {
  const { category } = props;
  const [isShowDropDown, setShowDropDown] = useState(false);

  const dropDownValueHandler = (selectedValue) => {
    props.onChangeDropDown(selectedValue);
    setShowDropDown(false);
  };

  return (
    <div className="bg-white mx-auto mb-3 w-[90%] lg:w-[85%] justify-between flex flex-wrap gap-2">
      <div className="rounded-md shadow w-full md:w-[40%] flex items-center justify-around">
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
        <div className="relative w-full md:w-[30%] items-center">
          <button
            onClick={() => {
              setShowDropDown((prev) => !prev);
            }}
            className="w-full h-full flex jus text-white bg-[#263544] focus:outline-none font-medium rounded-md text-sm px-4 py-2 justify-between items-center"
          >
            Filter
            <FontAwesomeIcon className="pl-2" icon={faChevronDown} />
          </button>
          {isShowDropDown && (
            <ul className="px-2 py-2 w-full absolute top-[46px] rounded-md shadow bg-white">
              <li
                onClick={dropDownValueHandler.bind(null, "all")}
                className="py-2 hover:bg-slate-200 cursor-pointer"
              >
                Employee
              </li>
              <li
                onClick={dropDownValueHandler.bind(null, "janitor")}
                className="py-2 hover:bg-slate-200 cursor-pointer border-y-[1px] border-slate-200"
              >
                Janitor
              </li>
              <li
                onClick={dropDownValueHandler.bind(null, "collector")}
                className="py-2 hover:bg-slate-200 cursor-pointer"
              >
                Collector
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TableInput;
