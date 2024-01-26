import React from "react";
import { Route, Routes } from "react-router-dom";
// import FormCALayout from "../Layout/formca.layout";
// import SimpleInterestLayout from "../Layout/simpleinterest.layout";
import CompoundInterestLayout from "../Layout/compoundinterest.layout";

const CompoundInterestHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <CompoundInterestLayout>
            <Component {...rest} />
          </CompoundInterestLayout>
        }
      />
    </Routes>
  );
};

export default CompoundInterestHOC;
