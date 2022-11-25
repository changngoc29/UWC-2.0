import React, { Fragment, useState } from "react";
import ColumnNavbar from "../components/Frame/Column_Nav/ColumnNavbar";
import { employeeNavItems } from "../DummyData";
import Header from "../components/Frame/Header/Header";

const EmployeePage = () => {
  const [navItems, setNavItems] = useState([...employeeNavItems]);

  const updateNavItemsStatusHandler = (newNavItems) => {
    setNavItems(newNavItems);
  };

  return (
    <Fragment>
      <ColumnNavbar
        role="EMPLOYEE"
        navItems={navItems}
        onUpdateDataStatus={updateNavItemsStatusHandler}
      />
      <div className="ml-24 lg:ml-64">
        {navItems.map((navItem, index) => {
          return (
            navItem.isActive && (
              <Header role="Employee" key={index} currentData={navItem.name} />
            )
          );
        })}
      </div>
    </Fragment>
  );
};

export default EmployeePage;
