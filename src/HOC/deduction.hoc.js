import React from "react";
import { Route, Routes } from "react-router-dom";
import DeductionLayout from "../Layout/deduction.layout";
const DeductionHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <DeductionLayout>
            <Component {...rest} />
          </DeductionLayout>
        }
      />
    </Routes>
  );
};

export default DeductionHOC;
