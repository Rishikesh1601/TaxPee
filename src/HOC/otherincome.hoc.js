import React from "react";
import { Route, Routes } from "react-router-dom";
import OtherIncomeLayout from "../Layout/otherincome.layout";
const OtherIncomeHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <OtherIncomeLayout>
            <Component {...rest} />
          </OtherIncomeLayout>
        }
      />
    </Routes>
  );
};

export default OtherIncomeHOC;
