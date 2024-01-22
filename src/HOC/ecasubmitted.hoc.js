import React from "react";
import { Route, Routes } from "react-router-dom";
import CAsubmittedLayout from "../Layout/ecasubmitted.layout";

const CASubmittedHOC = ({ component: Component, ...rest }) => {
  return (
    <Routes> {/* Wrap Routes around your Route */}
      <Route
        {...rest}
        element={ // Use 'element' instead of 'component' for React Router v6
          <CAsubmittedLayout>
            <Component {...rest} />
          </CAsubmittedLayout>
        }
      />
    </Routes>
  );
};

export default CASubmittedHOC;
