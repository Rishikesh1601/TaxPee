import React from "react";
import { Route, Routes } from "react-router-dom";
import SalaryLayout from "../Layout/salary.layout";

const SalaryHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <SalaryLayout>
            <Component {...rest} />
          </SalaryLayout>
        }
      />
    </Routes>
  );
};

export default SalaryHOC;
