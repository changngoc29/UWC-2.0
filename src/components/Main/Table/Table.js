import React, { Fragment } from "react";
import UsersDataTable, { UsersDataCard } from "./UsersDataTable";
import VehiclesDataTable, { VehiclesDataCard } from "./VehiclesDataTable";

const Table = (props) => {
  const { infoDir, data, category } = props;

  return (
    <div className="h-[100vh] mt-[6rem]">
      <div className="hidden md:block bg-white w-[90%] lg:w-[85%] mx-auto p-4 rounded-lg overflow-auto shadow">
        <table className="table-auto w-full">
          <thead className="text-left bg-gray-50 border-b-2 border-gray-100">
            <tr className="text-[#0A284A]">
              <th className="p-3 whitespace-nowrap">No.</th>
              {infoDir.map((dir, index) => {
                return (
                  <th key={index} className="p-3 whitespace-nowrap">
                    {dir}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((singleRowData, index) => (
              <tr key={index} className={`${index % 2 !== 0 && "bg-gray-50"}`}>
                <td className="py-3 pr-3 px-4 whitespace-nowrap font-bold">{`${
                  index + 1
                }.`}</td>
                {category === "users" && (
                  <UsersDataTable singleRowData={singleRowData} />
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
        {data.map((singleRowData, index) => {
          return (
            <Fragment key={index}>
              {category === "users" && (
                <UsersDataCard singleRowData={singleRowData} />
              )}
              {category === "vehicles" && (
                <VehiclesDataCard singleRowData={singleRowData} />
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
