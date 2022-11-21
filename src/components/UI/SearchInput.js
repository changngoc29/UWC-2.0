import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ category }) => {
  return (
    <div className="rounded-md shadow w-full md:w-auto flex items-center">
      <FontAwesomeIcon
        className="text-slate-400 text-[1.2rem] px-2"
        icon={faSearch}
      />
      <input
        className="focus:outline-none flex-1"
        placeholder={`Search for ${category}`}
      />
      <button className="bg-[#263544] text-white p-1 m-1 rounded-md w-[6rem] overflow-hidden whitespace-nowrap">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
