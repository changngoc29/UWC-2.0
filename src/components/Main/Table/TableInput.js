import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../../UI/SearchInput";

const TableInput = (props) => {
  const { category } = props;
  const [isShowDropDown, setShowDropDown] = useState(false);

  const dropDownValueHandler = (selectedValue) => {
    props.onChangeDropDown(selectedValue);
    setShowDropDown(false);
  };

  return (
    <div className="bg-white mx-auto mb-3 w-[90%] lg:w-[85%] justify-between flex flex-wrap gap-2 p-2 shadow">
      <SearchInput category={category} />
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
