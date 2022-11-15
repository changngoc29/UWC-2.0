import React, { Fragment, useState } from "react";
import TableInput from "./TableInput";
import TablePagination from "./TablePagination";
import EmployeeDataTable, { EmployeeDataCard } from "./EmployeeDataTable";
import VehiclesDataTable, { VehiclesDataCard } from "./VehiclesDataTable";

const Table = (props) => {
  const { infoDir, data, category } = props;
  const [employeeDropDownValue, setEmployeeDropDownValue] = useState("all");

  const janitorData = data.filter((tuple) => {
    return tuple.role === "janitor";
  });

  const collectorData = data.filter((tuple) => {
    return tuple.role === "collector";
  });

  const [tableData, setTableData] = useState(data.slice(0, 5));

  const employeeDropDownHandler = (selectedValue) => {
    const employeeRole = selectedValue;
    console.log(employeeRole);
    setEmployeeDropDownValue(employeeRole);
    if (employeeRole === "janitor") {
      setTableData(janitorData.slice(0, 5));
    } else if (employeeRole === "collector") {
      setTableData(collectorData.slice(0, 5));
    } else if (employeeRole === "all") {
      setTableData(data.slice(0, 5));
    }
  };

  const changePageHandler = (action) => {
    if (category === "employee") {
      if (employeeDropDownValue === "collector") {
        action === "next" && setTableData(collectorData.slice(5, 10));
        action === "previous" && setTableData(collectorData.slice(0, 5));
      } else if (employeeDropDownValue === "janitor") {
        action === "next" && setTableData(janitorData.slice(5, 10));
        action === "previous" && setTableData(janitorData.slice(0, 5));
      } else if (employeeDropDownValue === "all") {
        action === "next" && setTableData(data.slice(5, 10));
        action === "previous" && setTableData(data.slice(0, 5));
      }
    } else {
      action === "next" && setTableData(data.slice(5, 10));
      action === "previous" && setTableData(data.slice(0, 5));
    }
  };

  return (
    <div className="h-[100vh] mt-[6rem]">
      <TableInput
        onChangeDropDown={employeeDropDownHandler}
        category={category}
      />
      <div className="hidden md:block bg-white w-[90%] lg:w-[85%] mx-auto p-4 rounded-lg overflow-auto shadow">
        <table className="table-auto w-full">
          <thead className="text-left bg-gray-50 border-b-2 border-gray-100">
            <tr className="text-[#0A284A]">
              <th className="p-3 whitespace-nowrap">No.</th>
              {infoDir.map((dir, index) => {
                return (
                  <th
                    key={index}
                    className={`${
                      dir === "Contact" && "text-center"
                    } p-3 whitespace-nowrap`}
                  >
                    {dir}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {tableData.map((singleRowData, index) => (
              <tr key={index} className={`${index % 2 !== 0 && "bg-gray-50"}`}>
                <td className="py-3 pr-3 px-4 whitespace-nowrap font-bold">{`${
                  index + 1
                }.`}</td>
                {category === "employee" && (
                  <EmployeeDataTable singleRowData={singleRowData} />
                )}
                {category === "vehicles" && (
                  <VehiclesDataTable singleRowData={singleRowData} />
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[90%] mx-auto md:hidden grid grid-cols-1">
        {tableData.map((singleRowData, index) => {
          return (
            <Fragment key={index}>
              {category === "employee" && (
                <EmployeeDataCard singleRowData={singleRowData} />
              )}
              {category === "vehicles" && (
                <VehiclesDataCard singleRowData={singleRowData} />
              )}
            </Fragment>
          );
        })}
      </div>
      <TablePagination onChangePage={changePageHandler} />
    </div>
  );
};

export default Table;
