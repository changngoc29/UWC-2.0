import React, { Fragment, useState } from "react";
import ColumnNavbar from "../components/Frame/Column_Nav/ColumnNavbar";
import Header from "../components/Frame/Header/Header";
import Table from "../components/Main/Table/Table";
import OptimizedRoutes from "../components/Main/Map/OptimizedRoutes";
import MCPs from "../components/Main/MCPs/MCPs";
import {
  adminNavItems,
  employeeInfoDir,
  employeeData,
  vehiclesInfoDir,
  vehiclesData,
} from "../DummyData";
import Tasks from "../components/Main/Tasks/Tasks";

const AdminPage = () => {
  const [navItems, setNavItems] = useState([...adminNavItems]);

  const updateNavItemsStatusHandler = (newNavItems) => {
    setNavItems(newNavItems);
  };

  return (
    <Fragment>
      {
        <ColumnNavbar
          role="ADMIN"
          navItems={navItems}
          onUpdateDataStatus={updateNavItemsStatusHandler}
        />
      }
      <div className="ml-24 lg:ml-64">
        {navItems.map((navItem, index) => {
          return (
            navItem.isActive && (
              <Header key={index} currentData={navItem.name} />
            )
          );
        })}
        {navItems.map((navItem, index) => {
          let content = undefined;

          if (navItem.isActive === true) {
            if (navItem.name === "Employee") {
              content = (
                <Table
                  category="employee"
                  key={index}
                  infoDir={employeeInfoDir}
                  data={employeeData}
                />
              );
            } else if (navItem.name === "Optimized Routes") {
              content = <OptimizedRoutes key={index} />;
            } else if (navItem.name === "Vehicles") {
              content = (
                <Table
                  category="vehicles"
                  key={index}
                  infoDir={vehiclesInfoDir}
                  data={vehiclesData}
                />
              );
            } else if (navItem.name === "MCPs") {
              content = <MCPs key={index} />;
            } else if (navItem.name === "Tasks Assignment") {
              content = <Tasks key={index} />;
            }
          }
          return content;
        })}
      </div>
    </Fragment>
  );
};

export default AdminPage;
