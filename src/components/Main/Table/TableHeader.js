import React from "react";

const TableHeader = (props) => {
  const { dir } = props;

  return (
    <th
      className={`${dir === "Contact" && "text-center"} p-3 whitespace-nowrap`}
    >
      {dir}
    </th>
  );
};

export default TableHeader;
