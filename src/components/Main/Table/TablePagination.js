import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TablePagination = (props) => {
  const [disable, setDisable] = useState({ next: false, previous: true });

  const changePageHandler = (action) => {
    props.onChangePage(action);
    setDisable((prev) => {
      return { next: !prev.next, previous: !prev.previous };
    });
  };

  return (
    <div className="flex flex-row-reverse w-[90%] lg:w-[80%] mx-auto whitespace-nowrap">
      <button
        disabled={disable.next}
        onClick={changePageHandler.bind(null, "next")}
        className="p-3 mt-3 ml-3 text-[#263544] font-bold cursor-pointer disabled:text-gray-400 disabled:cursor-default"
      >
        Next
        <FontAwesomeIcon className="pl-3" icon={faArrowRight} />
      </button>
      <button
        disabled={disable.previous}
        onClick={changePageHandler.bind(null, "previous")}
        className="p-3 mt-3 mr-3 text-[#263544] font-bold cursor-pointer disabled:text-gray-400 disabled:cursor-default"
      >
        <FontAwesomeIcon className="pr-3" icon={faArrowLeft} />
        Previous
      </button>
    </div>
  );
};

export default TablePagination;
