import React from "react";
import { Route, Routes } from "react-router-dom";
// import FormCALayout from "../Layout/formca.layout";
import SimpleInterestLayout from "../Layout/simpleinterest.layout";

const SimpleInterestHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <SimpleInterestLayout>
            <Component {...rest} />
          </SimpleInterestLayout>
        }
      />
    </Routes>
  );
};

export default SimpleInterestHOC;
