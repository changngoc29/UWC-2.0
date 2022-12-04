import React, { Fragment, useState } from "react";
import ColumnNavbar from "../components/Frame/Column_Nav/ColumnNavbar";
import { employeeNavItems } from "../DummyData";
import Header from "../components/Frame/Header/Header";
import Tasks from "../components/Main/Employee/Tasks/Tasks";

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
        {navItems.map((navItem, index) => {
          let content = undefined;

          if (navItem.isActive === true) {
            if (navItem.name === "My tasks") {
              content = <Tasks key={index} />;
            }
          }
          return content;
        })}
      </div>
    </Fragment>
  );
};

export default EmployeePage;
