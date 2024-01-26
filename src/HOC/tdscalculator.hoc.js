import React from "react";
import { Route, Routes } from "react-router-dom";
// import FormSubmittedLayout from "../Layout/formSubmitted.layout";
// import ItrCheckLayout from "../Layout/itrcheck.layout";
// import ItrFileSuccessLayout from "../Layout/fileitrsuccess.layout";
import TdsCalculatorLayout from "../Layout/tdscalculator.layout";

const TdsCalculatorHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <TdsCalculatorLayout>
            <Component {...rest} />
          </TdsCalculatorLayout>
        }
      />
    </Routes>
  );
};

export default TdsCalculatorHOC;
