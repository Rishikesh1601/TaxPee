import React from "react";
import { Route, Routes } from "react-router-dom";
import IncomeTaxLayout from "../Layout/incomeTax.layout";

const IncomeTaxHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <IncomeTaxLayout>
            <Component {...rest} />
          </IncomeTaxLayout>
        }
      />
    </Routes>
  );
};

export default IncomeTaxHOC;
